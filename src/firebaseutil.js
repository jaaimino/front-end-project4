/* global Firebase */

//Other local vars to this file
var firebaseURL = "https://front-end-project4.firebaseio.com/";
var firebaseRef = null;
var currentUser = null;

var onDataChange = [];

function initFirebase() {
  firebaseRef = new Firebase(firebaseURL);
  // Attach an asynchronous callback to read the data at our posts reference
  getFirebase().on("value", function(snapshot) {
    for (var i = 0; i < onDataChange.length; i++) {
      onDataChange[i](snapshot.val());
    }
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

function addOnDataChange(callback) {
  onDataChange.push(callback);
}

function createUser(callback) {
  getFirebase().createUser({
    email: "bobtony@firebase.com",
    password: "correcthorsebatterystaple"
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    }
    else {
      callback(userData);
    }
  });
}

/**
 *  email: "bobtony@firebase.com",
    password: "correcthorsebatterystaple"
 */
function login(email, pass, callback) {
  getFirebase().authWithPassword({
    email: email,
    password: pass
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    }
    else {
      //console.log("Authenticated successfully with payload:", authData);
      setCurrentUser(authData);
      callback(authData);
    }
  });
}

function logout() {
  getFirebase().unauth();
}

function addPost(post) {
  getFirebase().child("posts").push(post);
}

/**
 * Getters and setters
 */

function getFirebase() {
  return this.firebaseRef;
}

function getCurrentUser() {
  return currentUser;
}

function setCurrentUser(userData) {
  currentUser = userData;
}

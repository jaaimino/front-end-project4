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
    email: "jacob@jacob.com",
    password: "jacob"
  }, function(error, userData) {
    if (error) {
      callback(userData, error);
    }
    else {
      callback(userData, error);
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
      callback(authData, error);
    }
    else {
      callback(authData, error);
    }
  });
}

function logout() {
  getFirebase().unauth();
}

function addPost(post) {
  getFirebase().child("posts").push(post);
}

function addVideo(video) {
  getFirebase().child("videos").push(video);
}
/**
 * Getters and setters
 */
function isLoggedIn(){
  return getFirebase().getAuth() != null
}

function getFirebase() {
  return this.firebaseRef;
}

function getCurrentUser() {
  getFirebase().getAuth();
}

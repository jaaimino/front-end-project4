/* global Firebase */

//Other local vars to this file
var firebaseURL = "https://front-end-project4.firebaseio.com/";
var firebaseRef = null;
var currentUser = null;

function initFirebase(){
    firebaseRef = new Firebase(firebaseURL);
    // Attach an asynchronous callback to read the data at our posts reference
    getFirebase().on("value", function(snapshot) {
      console.log(snapshot.val().posts);
      var postsObject = snapshot.val().posts;
      console.log(postsObject)
      var postsArr = [];
      for(var i in postsObject){
        postsArr.push(postsObject[i]);
      }
      renderPage(postsArr);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
}

function createUser(callback){
    getFirebase().createUser({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        callback(userData);
      }
    });
}

function login(callback){
    getFirebase().authWithPassword({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        setCurrentUser(authData);
        callback(authData);
      }
    });
}

function logout(){
    getFirebase().unauth();
}

function setStuff(){
    console.log("Setting stuff");
    getFirebase().child("posts").push({
      title: "Hello World!",
      author: "Firebase",
      text: "Stuff!",
      location: {
        city: "San Francisco",
        state: "California",
        zip: 94103
      }
    });
}

/**
 * Getters and setters
 */

function getFirebase(){
    return this.firebaseRef;
}

function getCurrentUser(){
    return currentUser;
}

function setCurrentUser(userData){
    currentUser = userData;
}


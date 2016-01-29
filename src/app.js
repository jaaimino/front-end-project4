/*
 * App initialization here and stuff
 */
initFirebase()
logout();
setStuff();
login(function(){
  setStuff();
});

findRoute();
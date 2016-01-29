/*
 * App initialization here and stuff
 */
initFirebase()
logout();
setStuff();
login(function(){
  setOnDataChange(function(data){
    //renderPage(data);
  })
  setStuff();
});

findRoute();
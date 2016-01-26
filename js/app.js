/*
 * Main app stuff here 
 * All DOM manipulation in here
 */
initFirebase()
logout();
setStuff();
login(function(){
  setOnDataChange(function(data){
    renderPage(data);
  })
  setStuff();
});

/*
 * Main app stuff here 
 * All DOM manipulation in here
 */
initFirebase()
logout();
setStuff();
login(function(){
  console.log("Logged in before calling stuff.");
  console.log(getCurrentUser());
  setOnDataChange(function(data){
    renderPage(data);
  })
  setStuff();
});

/* global getControllers */
addController("login", {
    setup : function(){
      $("#loginForm").submit(function( event ) {
        var userField = $('#loginForm').find('input[name="user"]');
        var passField = $('#loginForm').find('input[name="pass"]');
        var user = userField.val();
        var pass = passField.val();
        login(user, pass, function(){
          console.log("Logged in.");
        });
        userField.val("");
        passField.val("");
        event.preventDefault();
      });
    },
    renderPage : function(){
      
    }
})
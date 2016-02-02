/* global getControllers */
addController("login", {
    setup : function(){
      $("#loginForm").submit(function( event ) {
        event.preventDefault();
        var userField = $('#loginForm').find('input[name="user"]');
        var passField = $('#loginForm').find('input[name="pass"]');
        var user = userField.val();
        var pass = passField.val();
        login(user, pass, function(data, error){
          if(error){
            console.log(error);
            $('#loginError').text(error);
            return;
          }
          forcePageChange("#/");
        });
        userField.val("");
        passField.val("");
      });
    },
    renderPage : function(){
      
    }
})
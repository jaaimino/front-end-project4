/* global getControllers */
addController("newpost", {
    setup : function(){
      console.log($("#nope").text());
        $("#postForm").submit(function( event ) {
          alert( "Handler for .submit() called." );
          event.preventDefault();
        });
    },
    renderPage : function(){
    }
})
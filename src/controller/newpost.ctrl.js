/* global getControllers */
addController("newpost", {
    setup : function(){
      tinymce.init({
        selector: '#editor'
      });
      $("#postForm").submit(function( event ) {
        var textField = $('#postForm').find('textarea[name="text"]');
        var text = textField.val();
        addPost({
          title: "Hello World!",
          author: "Firebase",
          text: text,
          location: {
            city: "San Francisco",
            state: "California",
            zip: 94103
          }
        });
        textField.val("");
        event.preventDefault();
      });
    },
    renderPage : function(){
      
    }
})
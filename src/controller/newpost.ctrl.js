/* global getControllers */
addController("newpost", {
    setup : function(){
      $("#postForm").submit(function( event ) {
        var titleField = $('#postForm').find('input[name="title"]');
        var textField = $('#postForm').find('textarea[name="text"]');
        var title = titleField.val();
        var text = textField.val();
        addPost({
          title: title,
          author: getCurrentUser(),
          text: text,
          location: {
            city: "San Francisco",
            state: "California",
            zip: 94103
          }
        });
        titleField.val("");
        textField.val("");
        event.preventDefault();
      });
    },
    renderPage : function(){
      
    }
})
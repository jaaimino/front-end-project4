/* global getControllers */
addController("newpost", {
    setup : function(){
      tinymce.init({
        selector: '#editor'
      });
      $("#postForm").submit(function( event ) {
        var titleField = $('#postForm').find('input[name="title"]');
        var textField = $('#postForm').find('textarea[name="text"]');
        var title = titleField.val();
        var text = textField.val(); // process the text at this point (maybe probably)
        addPost({
          title: title,
          text: text,
          location: {
            city: "San Francisco",
            state: "California",
            zip: 94103
          }
        });
        forcePageChange("#/");
        titleField.val("");
        textField.val("");
        event.preventDefault();
      });
    },
    renderPage : function(){
      
    }
})
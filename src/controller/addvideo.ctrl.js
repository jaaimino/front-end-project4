/* global getControllers */
addController("addvideo", {
    setup : function(){
      tinymce.EditorManager.editors = []; 
      tinymce.init({selector:"#editor"});
      $("#postForm").submit(function( event ) {
        var urlField = $('#postForm').find('input[name="videoID"]');
        var textField = $('#postForm').find('textarea[name="text"]');
        var vid = reg_process(urlField.val());
        var text = textField.val(); // process the text at this point (maybe probably)
       
        addVideo({
          vid: vid[1],
          text: text,
          location: {
            city: "San Francisco",
            state: "California",
            zip: 94103
          }
        });
        
        forcePageChange("#/");
        urlField.val("");
        textField.val("");
        event.preventDefault();
        
      });
      
    },
    renderPage : function(){
      
    }
});

var reg_process = function(url){
  var parser = /(?:.*\/\/)?.*\/(?:watch\?v=)?([0-9a-zA-Z\-\_]*)/;
  var result = parser.exec(url);
  return(result);
  
  
};
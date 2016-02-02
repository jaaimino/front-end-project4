/* global getControllers */
addController("addvideo", {
    setup : function(){
      $("#postForm").submit(function( event ) {
        var urlField = $('#postForm').find('input[name="videoID"]');
        var textField = $('#postForm').find('textarea[name="text"]');
        var vid = reg_process(urlField.val());
        var text = textField.val(); // process the text at this point (maybe probably)
      /* 
        addPost({
          vid: vid,
          text: text,
          location: {
            city: "San Francisco",
            state: "California",
            zip: 94103
          }
        });
        */
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
  console.log("called");
  var parser = /(?:.*\/\/)?.*\/(?:watch\?v=)?([a-zA-Z]*)/;
  
  var result = parser.exec(url);
  console.log(result);
  return(result);
  
  
};
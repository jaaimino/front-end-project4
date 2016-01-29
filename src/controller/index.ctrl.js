/* global getControllers */
addController("index", {
    setup : function(){
        console.log("Setup on index");
        getFirebase().on("value", function(snapshot) {
          if(snapshot.val().posts){
              var postsObject = snapshot.val().posts;
              var postsArr = [];
              for(var i in postsObject){
                postsArr.push(postsObject[i]);
              }
              renderExternalTmpl({ file: "../../templates/movie", selector: '#movieList', data:postsArr });
          }
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
    },
    renderPage : function(){
    }
})
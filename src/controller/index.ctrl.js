/* global getControllers */

getControllers()["index"] = {
    setup : function(){
        getFirebase().on("value", function(snapshot) {
          var postsObject = snapshot.val().posts;
          var postsArr = [];
          for(var i in postsObject){
            postsArr.push(postsObject[i]);
          }
          renderExternalTmpl({ file: "../../templates/movie", selector: '#movieList', data:postsArr });
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
    },
    renderPage : function(){
    }
}
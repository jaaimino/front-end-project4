/* global getControllers */
addController("index", {
    setup: function() {
        console.log("Setup on index");
        addOnDataChange(function(data) {
            var postsArr = [];
            if(data.posts){
                for(var key in data.posts){
                    postsArr.push(data.posts[key]);
                }
            }
            renderExternalTmpl({
                file: "../../templates/movie",
                selector: '#movieList',
                data: postsArr
            });
        });
    },
    renderPage: function() {}
})
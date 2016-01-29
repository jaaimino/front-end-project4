/* global getControllers */
addController("index", {
    setup: function() {
        addOnDataChange(function(data) {
            var postsArr = [];
            if (data.posts) {
                for (var key in data.posts) {
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
    renderPage: function() {
        getFirebase().once("value", function(snapshot) {
            var postsArr = [];
            if (snapshot.val().posts) {
                for (var key in snapshot.val().posts) {
                    postsArr.push(snapshot.val().posts[key]);
                }
            }
            renderExternalTmpl({
                file: "../../templates/movie",
                selector: '#movieList',
                data: postsArr
            });
        });

    }
})
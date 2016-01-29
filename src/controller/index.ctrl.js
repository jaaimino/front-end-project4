/* global getControllers */
addController("index", {
    setup: function() {
        console.log("Setup on index");
        addOnDataChange(function(data) {
            renderExternalTmpl({
                file: "../../templates/movie",
                selector: '#movieList',
                data: data
            });
        });
    },
    renderPage: function() {}
})
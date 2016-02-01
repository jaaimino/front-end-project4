/* global getControllers */

var styleSheets = ["../css/lightstyle.css", "../css/darkstyle.css"];
var currentStyle = 0;

addController("global", {
    setup : function() {
        $("#changeStyle").click(function(event){
            event.preventDefault();
            swapStyleSheet();
        });
    },
    renderPage: function() {
    }
});

function swapStyleSheet() {
    currentStyle+=1;
    if(currentStyle > styleSheets.length - 1){
        currentStyle = 0;
    }
    $("#pagestyle").attr("href", styleSheets[currentStyle]);
}



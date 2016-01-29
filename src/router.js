/* Configuration for views and set templates for views */
var views = {
    "index" : {
        "template" : "../views/index",
        "controller" : "index",
        "url" : "#/test"
    },
    "newpost" : {
        "template" : "",
        "controller" : "",
        "url" : "#/test2"
    }
}

$(window).on("hashchange", function() {
    findRoute(location.hash);
});

/**
 * Figure out what route we're at, and change the page to that
 */
function findRoute(){
    for (var route in views){
        if(location.hash === views[route].url){
            changePage(views[route]);
            return;
        }
        changePage(views["index"]);
    }
}

/**
 * Set up new page and render view template,
 * then call user's functions in controller
 */
function changePage(route){
    var controller = getController(route.controller);
    if(controller.setup){
        controller.setup();
    }
    renderExternalTmpl({ file: route.template, selector: '#view' }, function(){
        if(controller.renderPage){
            controller.renderPage();
        }
    });
}

var renderExternalTmpl = function(item, callback) {
  var file = item.file + '.tmpl.html';
  $.when($.get(file))
   .done(function(tmplData) {
       $.templates({ tmpl: tmplData });
       $(item.selector).html($.render.tmpl(item.data));
       if(callback){
           callback();
       }
   });  
}
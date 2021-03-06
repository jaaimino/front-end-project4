/* Configuration for views and set templates for views */
var routes = {
    "index" : {
        "template" : "../views/index",
        "controller" : "index",
        "url" : "#/"
    },
    "newpost" : {
        "template" : "../views/newpost",
        "controller" : "newpost",
        "url" : "#/newpost"
    },
    "addvideo" : {
        "template" : "../views/addvideo",
        "controller" : "addvideo",
        "url" : "#/addvideo"
    },
    "login" : {
        "template" : "../views/login",
        "controller" : "login",
        "url" : "#/login"
    }
}

function initRouter(){
    var controller = getController('global');
    if(controller.setup){
        controller.setup();
    }
    if(controller.renderPage){
        controller.renderPage()
    }
}

$(window).on("hashchange", function() {
    findRoute(location.hash);
});

function forcePageChange(route){
    setHash(route);
    findRoute();
}

/**
 * Figure out what route we're at, and change the page to that
 */
function findRoute(){
    for (var route in routes){
        if(location.hash === routes[route].url){
            changePage(routes[route]);
            return;
        }

    }
    setHash("#/");
    changePage(routes["index"]);
    return;
}

function setHash(hash){
    if(history.pushState) {
    history.pushState(null, null, hash);
}
    else {
        location.hash = hash;
    }
}

/**
 * Set up new page and render view template,
 * then call user's functions in controller
 */
function changePage(route){
    var controller = getController(route.controller);
    renderExternalTmpl({ file: route.template, selector: '#view' }, function(){
        if(controller.setup){
            controller.setup();
        }
        if(controller.renderPage){
            controller.renderPage()
        }
    });
}

function renderExternalTmpl(item, callback) {
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
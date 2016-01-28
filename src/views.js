/* Configuration for views and set templates for views */
var views = {
    "index" : {
        "template" : "../views/index",
        "controller" : "index"
    },
    "newpost" : {
        "template" : "",
        "controller" : ""
    }
}

function changeView(){
    
}

function getViews(){
    return views;
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
	
function renderPage(data){
  // Render the template with the movies data and insert
// the rendered HTML under the "movieList" element
  renderExternalTmpl({ file: '../views/index', selector: '#view' }, function(){
      renderExternalTmpl({ file: '../templates/movie', selector: '#movieList', data: data })
  });
}
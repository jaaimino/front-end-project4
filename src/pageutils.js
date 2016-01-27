var renderExternalTmpl = function(item) {
  var file = item.file + '.tmpl.html';
  $.when($.get(file))
   .done(function(tmplData) {
       $.templates({ tmpl: tmplData });
       $(item.selector).html($.render.tmpl(item.data));
   });    
}
	
function renderPage(data){
  // Render the template with the movies data and insert
// the rendered HTML under the "movieList" element
  renderExternalTmpl({ file: '../templates/movie', selector: '#movieList', data: data })
}
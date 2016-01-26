/*
 * Main app stuff here 
 * All DOM manipulation in here
 */
 
var renderExternalTmpl = function(item) {
  var file = '../templates/' + item.name + '.tmpl.html';
  $.when($.get(file))
   .done(function(tmplData) {
       $.templates({ tmpl: tmplData });
       $(item.selector).html($.render.tmpl(item.data));
   });    
}
	
function renderPage(data){
  // Render the template with the movies data and insert
// the rendered HTML under the "movieList" element
  renderExternalTmpl({ name: 'movie', selector: '#movieList', data: data })
}

initFirebase()
logout();
setStuff();
login(function(){
  console.log("Logged in before calling stuff.");
  console.log(getCurrentUser());
  setStuff();
});

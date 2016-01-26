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

var movies = [
	{ name: "The Red Violin", releaseYear: "1998" },
	{ name: "Eyes Wide Shut", releaseYear: "1999" },
	{ name: "The Inheritance", releaseYear: "1976" }
];

// Render the template with the movies data and insert
// the rendered HTML under the "movieList" element

renderExternalTmpl({ name: 'movie', selector: '#movieList', data: movies })
	


initFirebase()
logout();
setStuff();
login(function(){
  console.log("Logged in before calling stuff.");
  console.log(getCurrentUser());
  setStuff();
});

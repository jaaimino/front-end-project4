/* global getControllers */




addController("index", {
    setup: function() {
        if(isLoggedIn()){
            $("#newpostButton").show();
            $("#addvideoButton").show();
            $("#logoutButton").show();
            $("#loginButton").hide();
        } else {
            $("#loginButton").show();
            $("#addvideoButton").hide();
            $("#newpostButton").hide();
            $("#logoutButton").hide();
        }
        addOnDataChange(function(data) {
            var postsArr = [];
            if (data && data.posts) {
                for (var key in data.posts) {
                    var post = data.posts[key];
                    console.log(post.text);
                    postsArr.push(post);
                }
                renderExternalTmpl({
                    file: "../../templates/post",
                    selector: '#posts',
                    data: postsArr
                });
            }
        });
      $(".left").click(left);
      $(".right").click(right);

    },
    renderPage: function() {
        getFirebase().once("value", function(snapshot) {
            var postsArr = [];
            if (snapshot.val() && snapshot.val().posts) {
                for (var key in snapshot.val().posts) {
                    var post = snapshot.val().posts[key];
                    postsArr.push(post);
                }
            }
            renderExternalTmpl({
                file: "../../templates/post",
                selector: '#posts',
                data: postsArr
            });
        });
        
        
        var seg = [
            {
                url:"http://placecage.com/600/300"
            },
            {
                url:"http://placecage.com/g/600/300"
            },
            {
                url:"http://placecage.com/g/600/300"
            },
            {
                url:"http://placecage.com/500/300"
            }
            
            ]

        
        renderExternalTmpl({
        file: "../../templates/movie",
        selector: '.slider-container',
        data: seg
        },function(){
            carousel.elements = $(".citem").toArray();
            console.log(carousel.elements);
            $(carousel.elements[0]).css("display", "inline");
        });
        


        
    }
})


var carousel = {
  elements:[],
  active: 0
}
function setup(){
    
}
function activate(index){
  $(carousel.elements[index]).css("display", "inline");
}
function deactivate(index){
  $(carousel.elements[index]).css("display", "none");
}

function left(){
  deactivate(carousel.active);
  carousel.active -= 1;
  if(carousel.active < 0){
    carousel.active = carousel.elements.length-1;
  }
  activate(carousel.active);
}

function right(){
  deactivate(carousel.active);
  carousel.active += 1;
  if(carousel.active > carousel.elements.length-1){
    carousel.active = 0;
  }
  activate(carousel.active);
  
}



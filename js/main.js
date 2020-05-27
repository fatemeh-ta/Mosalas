/*TOGGLE MENU*/
$(document).ready(function(){
  $(".menu-icon").click(function(){
    $(".menu-bar").slideToggle();
  })
})
/*SLIDE SHOW*/
$(document).ready(function() {
  $('#slide-pic').lightSlider({
    adaptiveHeight:true,
    item:1,
    slideMargin:0,
    loop:true
  });
});
/*Counter*/ 
var count = (function() {
  var counter=0;
  return function() {return counter+=1;}
})();

function displaylike() {
  document.getElementById("like").innerHTML=count();
}

var countunlike = (function() {
  var counterunlike=0;
  return function() {return counterunlike+=1;}
})();
function displayunlike() {
  document.getElementById("unlike").innerHTML=countunlike();
}
/*ZOOMIN ZOOM10*/
function zoomin() {
  var mynews=document.getElementById("body");
  var currwidth=mynews.clientWidth;
  if (currwidth==1000) {
    alart ("Maximum zoom in");
  }
  else {
  mynews.style.fontSize=(currwidth+0.1)+"px";  
  }
}
/*ZOOMIN ZOOMOUT*/
function zoomout() {
  var mynews=document.getElementById("body");
  var currwidth=mynews.clientWidth;
  if (currwidth==40) {
    alart ("Maximum zoom out");
  }
  else {
    mynews.style.width=(currwidth-40)+"px"; 
  }
}





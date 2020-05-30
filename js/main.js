/*TOGGLE MENU*/
$(document).ready(function(){
  $(".menu-icon").click(function(){
    $(".menu-bar").slideToggle();
  })
/*SLIDE SHOW*/
  $('#slide-pic').lightSlider({
    adaptiveHeight:true,
    item:1,
    slideMargin:0,
    loop:true
  });
//---------- CHANGE FONT ----------
$('#incfont').click(function () {
  curSize = parseInt($('.editor-detail *p').css('font-size')) + 2;

if (curSize <= 25)
  $('.editor-detail *').css('font-size', curSize);
});

$('#decfont').click(function () {
  curSize = parseInt($('.editor-detail *p').css('font-size')) - 2;

  if (curSize >= 9)
  $('.editor-detail *').css('font-size', curSize);
});
//---------- END OF CHANGE FONT ----------
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
 





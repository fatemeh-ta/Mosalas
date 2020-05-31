/*TOGGLE MENU*/
$(document).ready(function(){
  $(".menu-icon").click(function(){
    $(".menu-bar").slideToggle();
  })
//---------- SATRT SLIDE SHOW ---------
if ($('#slide-pic').length> 0) {
  $('#slide-pic').lightSlider({
    adaptiveHeight:true,
    item:1,
    slideMargin:0,
    loop:true
  });
}
//---------- END SLIDE SHOW ---------

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

//---------- START OF SLIMSCROLL ----------
if ($('.l-latest-news-content').length> 0) {
  $(function(){
    $('.l-latest-news-content').slimScroll({
      position: 'right',
      alwaysVisible: true,
      size: '5px',
      color: '#c92627',
      distance: '1px',
      allowPageScroll: false,
      height: '500px',
    });
  });
}
//---------- END OF SLIMSCROLL ----------

//---------- START OF Tab ----------
 $ ('.tab-container:first').show();
 $ ('.tab-nevigation li:first').addClass('active');

 $ ('.tab-nevigation li').click(function(event) {
  index = $(this).index();
   $ ('.tab-nevigation li').removeClass('active');
   $ (this).addClass('active');
   $ ('.tab-container').hide();
   $ ('.tab-container').eq(index).show();
 });

//---------- END OF Tab ----------

});
//---------- START OF COUNTER ----------
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
//---------- END OF COUNTER ----------








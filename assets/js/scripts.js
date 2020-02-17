$(document).ready(function(){
   $(window).resize(function(){
   var width = $('html').width();
   if (width > 780){
     $(".ocul").slideDown(0);
   }
   if (width < 780){
     $(".ocul").slideUp(0);
   }
});

  $(".hambur").click(function(){
    $(".ocul").slideToggle();
  });
});

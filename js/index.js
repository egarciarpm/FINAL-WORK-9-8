$(document).ready(function(){

   // jQuery methods go here...



$('.promo').hide();
$('.jumbotron').hide();
$('.jumbotron').delay(250).slideDown(1500);
$('.headerlogo').mouseover(function(){
    $('.headertext').slideToggle(500).delay(1500);
});
$('.promo').mouseover(function(){
    $('.promodesc').slideToggle(1500).delay(1500);
});
});


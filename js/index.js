$(document).ready(function(){

   // jQuery methods go here...



$('.promodesc').hide();
$('.jumbotron').hide();
$('.blogdesc').hide();
$('.testdesc').hide();
$('.rpmdesc').hide();
$('#suite1desc').hide();
$('#suite2desc').hide();
$('#suite3desc').hide();
$('.jumbotron').delay(250).slideDown(1500);
$('.headerlogo').click(function(){
    $('.headerdesc').slideToggle(500).delay(2000);
});
$('.promo').click(function(){
    $('.promodesc').slideToggle(1500).delay(2000);
});
$('.testhead').click(function(){
    $('.testdesc').slideToggle(1500).delay(2000);
});
$('.bloghead').click(function(){
    $('.blogdesc').slideToggle(1500).delay(2000);
});
$('.rpmhead').click(function(){
    $('.rpmdesc').slideToggle(1500).delay(2000);
});
$('.suite1head').click(function(){
    $('#suite1desc').slideToggle(1500).delay(2000);
});
$('.suite2head').click(function(){
    $('#suite2desc').slideToggle(1500).delay(2000);
});
$('.suite3head').click(function(){
    $('#suite3desc').slideToggle(1500).delay(2000);
});
});


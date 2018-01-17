$(document).ready(function(){

console.log('working')

 $('.top').click(function(){
    $('html, body').animate({
        scrollTop: $(".home").offset().top   }, 500);
 });

 $(".serviceButton").click(function(){
    console.log('clicked')
    $('html, body').animate({
        scrollTop: $(".services").offset().top   }, 500);
 });

 $(".aboutButton").click(function(){
    console.log('clicked')
    $('html, body').animate({
        scrollTop: $(".aboutUs").offset().top   }, 500);
 });

 $(".staffButton").click(function(){
    console.log('clicked')
    $('html, body').animate({
        scrollTop: $(".doctors").offset().top   }, 500);
 });

 $(".promotionButton").click(function(){
    console.log('clicked')
    $('html, body').animate({
        scrollTop: $(".promotions").offset().top   }, 500);
 });

 $(".footerButton").click(function(){
    console.log('clicked')
    $('html, body').animate({
        scrollTop: $(".footer").offset().top   }, 500);
 });

})
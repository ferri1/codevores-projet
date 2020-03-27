$(document).ready(function(){
  $('.acc h3').click(function(){
    $(this).next('.content').slideToggle();
    $(this).parent()addClass('acti');
    $(this).parent()siblings()children('.content').slideUp();
    $(this).parent()siblings()removeClass('acti');
  });
});

$(document).ready(function(){
  $('.acc h3').click(function(){
    $(this).next('.content').slideToggle();
    $(this).parent().addClass('acti');
    $(this).parent().siblings().children('.content');
    $(this).parent().siblings().removeClass('acti');
   });
});

$('.radio').change(function() {
 console.log('New star rating: ' + this.value);
});


function bascule(id)
{
if (document.getElementById(id).style.visibility == "hidden")
document.getElementById(id).style.visibility = "visible";
else	document.getElementById(id).style.visibility = "hidden";
}

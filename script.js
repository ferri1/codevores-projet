// var btn = document.querySelector('.toggle-btn');
// var nav = document.querySelector('.nav');
// btn.onclick = function (){
//   nav.classList.toggle('nav-open');
//
// }

document.querySelector('.togg-menu').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('ferme');
});
document.querySelector('.fermer-menu').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('ferme');
});

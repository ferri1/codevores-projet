
// ouverture du burger
// // fermeture du burger
document.querySelector('.togg-menu').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('ferme');
});
document.querySelector('.fermer-menu').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('ferme');
});
// theme sombre
function changerTheme(classTheme) {
	document.querySelector('body').classList.remove('theme-jour', 'theme-nuit');
   document.querySelector('body').classList.add(classTheme);
 }

document.querySelector('.theme').addEventListener('click', function() {
  changerTheme('theme-jour');
});

document.querySelector('.chat').addEventListener('click', function() {
  changerTheme('theme-nuit');
});

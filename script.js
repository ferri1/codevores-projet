
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

document.querySelector("#envoyer").addEventListener('click', function() {
  console.log("ça fonctionne à partir du document.querySelector('#envoyer')");
});

envoyer.addEventListener("click", function() {
  console.log("ça fonctionne à partir de l'objet créer par le navigateur à partir de l'ID de l'élément HTML");
});



$('.ratings').rating(function(vote, event){
   $.ajax({
     method: 'post',
     url :'instrating.php',
     data: {vote: vote}
  }).done(function(info){
     $('.info').html("your vote : <b>"+info"</b>")
  })
  })

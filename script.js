var menuButton = document.getElementById('icon');
var sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', function() {
  sidebar.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  var targetElement = event.target;

  // Vérifie si l'élément cliqué est en dehors de la barre latérale et du bouton de menu
  if (!sidebar.contains(targetElement) && !menuButton.contains(targetElement)) {
    sidebar.classList.remove('open');
  }
});
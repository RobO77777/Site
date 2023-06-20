

// var confirmBtn = document.getElementById('btn-submit');
// var suggestionsInput = document.getElementById('suggestionsInput');

// confirmBtn.addEventListener('click', function() {
//   var suggestionsText = suggestionsInput.value;

//   // Appel de la fonction pour enregistrer le texte dans un fichier
//   saveTextToFile(suggestionsText);
  
//   suggestionsInput.value = '';
// });

// function saveTextToFile(text) {
//   // Création d'un objet Blob avec le texte
//   var blob = new Blob([text], { type: 'text/plain' });

//   // Création d'une URL de l'objet Blob
//   var url = URL.createObjectURL(blob);

//   // Création d'un lien de téléchargement
//   var link = document.createElement('a');
//   link.href = url;
//   link.download = 'suggestions.txt';

//   // Clic automatique sur le lien pour déclencher le téléchargement
//   link.click();

//   // Libération de l'URL de l'objet Blob
//   URL.revokeObjectURL(url);
// }

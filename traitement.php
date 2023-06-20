<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupérer le contenu de la textarea par son name
  $contenu = $_POST["monTextarea"];

  // Stocker les données dans un fichier
  $fichier = 'donnees_utilisateurs.txt';
  file_put_contents($fichier, $contenu . PHP_EOL, FILE_APPEND);

  // Afficher un message de succès
  echo "<p>Les données ont été enregistrées avec succès.</p>";
}
?>
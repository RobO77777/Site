<?php
require 'sendgrid-php.php';

$sendgrid = new \SendGrid('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');
$email = new \SendGrid\Mail\Mail();

$expediteur = $_POST['expediteur'];
$message = $_POST['message'];

$email->setFrom($expediteur, "Expéditeur");
$email->setSubject("Nouveau message depuis le site");
$email->addTo("ro649bot@gmail.com", "Destinataire");
$email->addContent("text/plain", $message);

try {
    $response = $sendgrid->send($email);
    echo 'Le courrier électronique a été envoyé avec succès';
} catch (Exception $e) {
    echo 'Erreur lors de l\'envoi du courrier électronique: '. $e->getMessage();
}
?>
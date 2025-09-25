<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: text/html; charset=UTF-8');

// 1. Charger PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

// 2. Traiter la requête
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Debug ici – pour enregistrer les données brutes
    file_put_contents("debug_post.txt", print_r($_POST, true));

    // Nettoyer les données
    $nom = isset($_POST['nom']) ? htmlspecialchars($_POST['nom'], ENT_QUOTES, 'UTF-8') : '';
    $prenom = isset($_POST['prenom']) ? htmlspecialchars($_POST['prenom'], ENT_QUOTES, 'UTF-8') : '';
    $entreprise = isset($_POST['entreprise']) ? htmlspecialchars($_POST['entreprise'], ENT_QUOTES, 'UTF-8') : '';
    $poste = isset($_POST['poste']) ? htmlspecialchars($_POST['poste'], ENT_QUOTES, 'UTF-8') : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8') : '';
    // $sujet = isset($_POST['sujet']) ? htmlspecialchars($_POST['sujet'], ENT_QUOTES, 'UTF-8') : '';
    $message = isset($_POST['message']) ? nl2br(htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8')) : '';
    $consentement = isset($_POST['consentement']) ? htmlspecialchars($_POST['consentement'], ENT_QUOTES, 'UTF-8') : '';

    // 3. Configuration PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Paramètres serveur
        $mail->isSMTP();
        $mail->Host = 'yeux.o2switch.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'sam@jeuformation.fr'; // ← à remplacer
        $mail->Password = 'Parmissx3impro45'; // ← à remplacer
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Expéditeur et destinataire
        $mail->setFrom('sam@jeuformation.fr', "Formulaire Jeu Formation");
        $mail->addAddress('sam@jeuformation.fr');
        $mail->addReplyTo($email, "$prenom $nom");

        // Contenu
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';
        $mail->Subject = "Formulaire de contact - jeuformation.fr"; // On peut remplacer ou compléter par $sujet si on l'active partout
        $mail->Body = "
            <strong>Nom :</strong> $nom<br>
            <strong>Prénom :</strong> $prenom<br>
            <strong>Entreprise :</strong> $entreprise<br>
            <strong>Poste Occupé :</strong> $poste<br>
            <strong>Email :</strong> $email<br>
            <strong>Message :</strong><br>$message<br>
            <strong>Consentement :</strong> $consentement<br>
        ";

        $mail->send();
        echo "Message envoyé avec succès (via Mailtrap)";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Erreur : " . $mail->ErrorInfo;
    }
} else {
    http_response_code(403);
    echo "Requête non autorisée.";
}
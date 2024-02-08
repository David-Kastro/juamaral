<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if (empty($_POST['name']) || empty($_POST['email'])) {
    header('Location: https://juamaral.com.br/obrigado/');
    exit;
}

$name = $_POST['name'];
$email = $_POST['email'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: https://juamaral.com.br/obrigado/');
    exit;
}

$to = $email;
$from = 'suporte@juamaral.com.br';
$fromName = 'Juliana Amaral';

$subject = "E-book comunicação na prática";

$htmlContent = ' 
<html>
  <head>
    <title>E-book: comunicação na pratica</title>
    <style>
      * {
        text-align: center;
        color: black;
      }
      h1 {
        font-size: 24px;
        margin: 16px 0 16px;
      }
      h2 {
        font-size: 16px;
        margin: 0;
        opacity: 0.6;
        margin: 16px 0 16px;
      }
      span {
        color: #bd4a65;
        font-weight: 700;
      }
      a {
        text-decoration: none;
        cursor: pointer;
      }
    </style>
  </head>
  <body style="background-color: white">
    <div style="width: 100%; max-width: 800px; margin: auto; padding: 22px">
      <h3>Parabéns ' . $name . '</h3>
      <h1>Seu e-book <span>COMUNICAÇÃO NA PRÁTICA</span> chegou!!</h1>
      <h2>Clique no botão abaixo para baixar o seu E-book</h2>

      <a
        href="https://juamaral.com.br/ebook-comunicacao-na-pratica.pdf"
        target="_blank"
        rel="noreferrer"
        ><button
          style="
            background-color: #03cbd1;
            border-radius: 8px;
            font-weight: bold;
            padding: 16px 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            border: none;
            cursor: pointer;
            margin: auto;
          "
        >
          Baixar e-book
        </button></a
      >
    </div>
  </body>
</html>

';

// Set content-type header for sending HTML email 
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers 
$headers .= 'From: ' . $fromName . '<' . $from . '>' . "\r\n";

// Send email 
if (mail($to, $subject, $htmlContent, $headers)) {
    echo 'Email has sent successfully.';
} else {
    echo 'Email sending failed.';
}

header('Location: https://juamaral.com.br/obrigado/');
exit;
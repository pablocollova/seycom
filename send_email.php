<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com'; // O el servidor SMTP que prefieras
        $mail->SMTPAuth = true;
        $mail->Username = 'contacto@seycom.es'; // Tu correo
        $mail->Password = 'Seycom&123'; // Tu contraseña
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Remitente y destinatario
        $mail->setFrom('contacto@seycom.es', 'Seycom.es');
        $mail->addAddress('administracion@seycom.info'); // Correo de destino

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de contacto desde seycom.es';
        $mail->Body    = "Nombre: $name<br>Correo: $email<br>Mensaje:<br>$message";

        // Adjuntar archivo (si existe)
        if (isset($_FILES['file']) && $_FILES['file']['error'] == UPLOAD_ERR_OK) {
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['file']['name']));
            move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);
            $mail->addAttachment($uploadfile, $_FILES['file']['name']);
        }

        // Enviar el correo
        $mail->send();
        echo 'Mensaje enviado correctamente';
    } catch (Exception $e) {
        echo "Error al enviar el mensaje. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
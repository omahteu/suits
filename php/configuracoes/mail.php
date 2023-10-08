<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/configuracoes.html";
$id = "1";
$usuario = $_POST["usuarioEmail"];
$senha = $_POST["senhaEmail"];
$smtp = $_POST["smtpEmail"];
$porta = $_POST["portaEmail"];
$timeouti = $_POST["timeoutEmail"];
$email_destino = $_POST["email_destino"];
$email_contabilidade = $_POST["email_contabilidade"];
$autenticacao = $_POST["autenticacaoEmail"];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE emeil SET usuarioEmail='$usuario', senhaEmail='$senha', smtpEmail='$smtp', portaEmail='$porta', 	timeoutEmail='$timeouti', email_destino='$email_destino', email_contabilidade='$email_contabilidade', autenticacaoEmail='$autenticacao' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  header("Location: $rota");
  exit;
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
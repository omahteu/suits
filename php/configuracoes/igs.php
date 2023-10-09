<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/configuracoes.html";
$id = "1";
$social = $_POST["socialIg"];
$fantasia = $_POST["fantasiaIg"];
$cnpj = $_POST["cnpjIg"];
$cidade = $_POST["cidadeIg"];
$endereco = $_POST["enderecoIg"];
$numero = $_POST["numeroIg"];
$bairro = $_POST["bairroIg"];
$telefone = $_POST["telefoneIg"];
$telefone2 = $_POST["telefone2Ig"];
$telefone3 = $_POST["telefone3Ig"];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE ig SET socialIg='$social', fantasiaIg='$fantasia', cnpjIg='$cnpj', cidadeIg='$cidade', enderecoIg='$endereco', numeroIg='$numero', bairroIg='$bairro', telefoneIg='$telefone', telefone2Ig='$telefone2', telefone3Ig='$telefone3' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  header("Location: $rota");
  exit;
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
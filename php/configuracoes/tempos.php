<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$urlBase/suits/html/configuracoes.html";
$id = "1";
$tipo = $_POST["tip_tempo"];
$quantidade = $_POST["novo_tempo"];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE tempo SET $tipo='$quantidade' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  header("Location: $rota");
  exit;
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();

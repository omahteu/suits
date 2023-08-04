<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$urlBase/suits/html/configuracoes.html";
$id = "1";
$teto = $_POST["tetoCaixa"];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE teto SET tetoCaixa='$teto' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  header("Location: $rota");
  exit;
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();

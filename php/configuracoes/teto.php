<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/configuracoes.html";
$id = "1";
$teto = $_POST["tetoCaixa"];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE teto SET tetoCaixa='$teto' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  echo "<script>alert('Teto atualizado!'); window.location.href = '$rota';</script>";
  exit;
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();

<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/configuracoes.html";
$id = "1";
$permanencia = $_POST["permanenciaPernoite"];
$inicio = $_POST["inicioPernoite"];
$fim = $_POST["fimPernoite"];
$tipo = $_POST["tipoPernoite"];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE pernoite SET permanenciaPernoite='$permanencia', inicioPernoite='$inicio', fimPernoite='$fim', tipoPernoite='$tipo' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  echo "<script>alert('Pernoite atualizada!'); window.location.href = '$rota';</script>";
  exit;
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();

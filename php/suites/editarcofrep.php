<?php
include "../cnxInterna.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $antigo = $_POST["antigo"];
  $novo = $_POST["novo"];
  $sql = "UPDATE cofre SET suite='$antigo' WHERE valor='$novo'";
  if ($conn->query($sql) === TRUE) {
    $stmt->close();
    $conn->close();
    echo "sucesso";
    exit;
  } else {
    echo "Error updating record: " . $conn->error;
  }
}
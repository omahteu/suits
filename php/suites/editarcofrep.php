<?php
include "../cnxInterna.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $antigo = $_POST["antigo"];
  $novo = $_POST["novo"];
  $sql = "UPDATE cofre SET valor='$novo' WHERE suite='$antigo'";
  if ($conn->query($sql) === TRUE) {
    $conn->close();
    echo "sucesso";
    exit;
  } else {
    echo "Error updating record: " . $conn->error;
  }
}
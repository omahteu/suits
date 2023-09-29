<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $antigo = $_POST["antigo"];
    $novo = $_POST["novo"];
    $sql = "UPDATE comanda SET suite='$novo' WHERE id='$antigo'";
    if ($conn->query($sql) === TRUE) {
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
      } else {
        echo "Error updating record: " . $conn->error;
      }
}

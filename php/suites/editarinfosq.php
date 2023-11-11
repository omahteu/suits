<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $suite = $_POST["suite"];
    $tipo = $_POST["tipo"];

    $sql = "UPDATE infos SET tipo='$tipo' WHERE suite='$suite'";

    if ($conn->query($sql) === TRUE) {
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
      } else {
        echo "Error updating record: " . $conn->error;
      }
      
}

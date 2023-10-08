<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $parcial = $_POST["parcial"];
    $impressora = $_POST["impressora"];
    $horizontais = $_POST["horizontais"];
    $verticais = $_POST["verticais"];
    $fonte = $_POST["fonte"];

    $sql = "UPDATE impressora SET parcial='$parcial', impressora='$impressora', horizontais='$horizontais', verticais='$verticais', fonte='$fonte' WHERE id='$id'";

    echo $sql;
    // if ($conn->query($sql) === TRUE) {
    //     $stmt->close();
    //     $conn->close();
    //     echo "sucesso";
    //     exit;
    //   } else {
    //     echo "Error updating record: " . $conn->error;
    //   }
}

<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $modo = $_POST["modo"];

    $sql = "UPDATE tarefa SET modo='$modo' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

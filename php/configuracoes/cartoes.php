<?php

include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/configuracoes.html";
$id = $_POST["idCartao"];
$tipo = $_POST["tipo"];
$taxa = $_POST["nova_taxa"];

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($tipo == "c") {
    $sql = "UPDATE credito SET porcentagem='$taxa' WHERE id='$id'";
} else {
    $sql = "UPDATE debito SET porcentagem='$taxa' WHERE id='$id'";
}

if ($conn->query($sql) === TRUE) {
    header("Location: $rota");
    exit;
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();

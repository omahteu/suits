<?php

include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$urlBase/suits/html/configuracoes.html";
$id = $_POST["idAuto"];
$suite = $_POST["quarto"];
$placa = $_POST["placa"];
$rele = $_POST["rele"];

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE automacao SET suite='$suite', placa='$placa', rele='$rele' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    header("Location: $rota");
    exit;
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();

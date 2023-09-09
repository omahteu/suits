<?php

include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/cloud.html";
$id = $_POST["id"];
$acao = $_POST["acao"];

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE automacao SET estado='$acao' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    header("Location: $rota");
    exit;
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/cadastro.html";
$suite = $_POST["suite"];
$placa = $_POST["placa"];
$rele = $_POST["rele"];
$estado = "";
$query = "insert into automacao(suite, placa, rele, estado) values(?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssss", $suite, $placa, $rele, $estado);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    header("Location: $rota");
    exit;
}

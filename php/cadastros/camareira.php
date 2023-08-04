<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$urlBase/suits/html/cadastro.html";
$nome = $_POST["nomeCamareira"];
$codigo = $_POST["codigoCamareira"];
$query = "INSERT INTO camareira(nome, codigo) values(?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $nome, $codigo);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    header("Location: $rota");
    exit;
}

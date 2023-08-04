<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$urlBase/suits/html/cadastro.html";
$codigo = $_POST["codigoSuite"];
$numero = $_POST["numeroSuite"];
$nome = $_POST["nomeSuite"];
$hora = $_POST["horas_locacaoSuite"];
$tolerancia = $_POST["toleranciaSuite"];
$cobranca = $_POST["cobrancaSuite"];
$excedente = $_POST["excedenteSuite"];
$query = "insert into suite(codigoSuite, numeroSuite, nomeSuite, horas_locacaoSuite, toleranciaSuite, cobrancaSuite, excedenteSuite) values(?, ?, ?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssssss", $codigo, $numero, $nome, $hora, $tolerancia, $cobranca, $excedente);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    header("Location: $rota");
    exit;
}

<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$urlBase/suits/html/cadastro.html";
$usuario = $_POST["nomeUsuario"];
$senha = $_POST["senhaUsuario"];
$tipo = $_POST["statusUsuario"];
$query = "insert into automacao(usuario, senha, tipo) values(?, ?, ?)";

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

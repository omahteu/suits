<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/cadastro.html";
$usuario = $_POST["nomeUsuario"];
$senha = $_POST["senhaUsuario"];
$tipo = $_POST["statusUsuario"];
$query = "insert into usuarios(usuarioUsuario, senhaUsuario, tipoUsuario) values(?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sss", $usuario, $senha, $tipo);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    header("Location: $rota");
    exit;
}

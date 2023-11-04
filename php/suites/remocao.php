<?php
include "../cnxInterna.php";

$usuario = $_POST["usuario"];
$data = $_POST["data"];
$hora = $_POST["hora"];
$operacao = $_POST["operacao"];
$motivo = $_POST["motivo"];
$query = "insert into remocao(usuario, data, hora, operacao, motivo) values(?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssss", $usuario, $data, $hora, $operacao, $motivo);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    echo 'sucesso';
    exit;
}

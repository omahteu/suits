<?php
include "../cnxInterna.php";

$caixa = $_POST["caixa"];
$data = $_POST["data"];
$hora = $_POST["hora"];
$suite = $_POST["suite"];
$motivo = $_POST["motivo"];
$query = "insert into desistencia(caixa, data, hora, suite, motivo) values(?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssss", $caixa, $data, $hora, $suite, $motivo);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    echo 'sucesso';
    exit;
}

<?php
include "../conexao.php";

$cliente = $_POST["cliente"];
$hora = $_POST["hora"];
$valor = $_POST["valor"];
$suite = $_POST["suite"];
$tipo = $_POST["tipo"];
$query = "insert into infos(cliente, hora, valor, suite, tipo) values(?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssss", $cliente, $hora, $valor, $suite, $tipo);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
}

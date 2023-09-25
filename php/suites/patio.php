<?php
include "../conexao.php";

$suite = $_POST["suiteE"];
$placa = $_POST["placa"];
$modelo = $_POST["modelo"];
$query = "insert into patio(suite, placa, modelo) values(?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sss", $suite, $placa, $modelo);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    echo 'sucesso';
    exit;
}

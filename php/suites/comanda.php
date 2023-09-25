<?php

include "../cnxInterna.php";

$suite = $_POST["suiteE"];
$descricao = $_POST["descricao"];
$quantidade = $_POST["quantidade"];
$vt = $_POST["valor_total"];
$vu = $_POST["valor_unitario"];
$hora = $_POST["hora"];
$vs = $_POST["vs"];
$query = "insert into comanda(suite, descricao, quantidade, valor_total, valor_unitario, hora, valor_suite) values(?, ?, ?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssssss", $suite, $descricao, $quantidade, $vt, $vu, $hora, $vs);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    echo "sucesso";
    exit;
}

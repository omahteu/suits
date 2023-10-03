<?php

include "../cnxInterna.php";

$suite = $_POST["suite"];
$descricao = $_POST["descricao"];
$quantidade = $_POST["quantidade"];
$valor_total = $_POST["valor_total"];
$valor_unitario = $_POST["valor_unitario"];
$hora = $_POST["hora"];
$valor_suite = $_POST["valor_suite"];
$query = "insert into comanda(suite, descricao, quantidade, valor_total, valor_unitario, hora, valor_suite) values(?, ?, ?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssssss", $suite, $descricao, $quantidade, $valor_total, $valor_unitario, $hora, $valor_suite);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    echo "sucesso";
    exit;
}

<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/cadastro.html";
$codigo = $_POST["codigo"];
$descricao = $_POST["descricao"];
$valorunitario = $_POST["valorunitario"];
$quantidade = "";
$categoria = $_POST["categoria"];
$data = $_POST["data"];
$query = "insert into produto(codigo, descricao, valorunitario, quantidade, categoria, data) values(?, ?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssssss", $codigo, $descricao, $valorunitario, $quantidade, $categoria, $data);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    header("Location: $rota");
    exit;
}

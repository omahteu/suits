<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/estoque.html";
$data = $_POST["dataAgora"];
$nome = $_POST["nome"];
$codigo = $_POST["codigoProduto"];
$descricao = $_POST["descricaoProduto"];
$valorunitario = $_POST["valorUnitarioProduto"];
$categoria = $_POST["categoriaProduto"];
$acao = $_POST["acao_movimentacao"];
$quantidade = $_POST["quantidadeProduto"];
$base = $_POST["quantidade_base"];

if ($acao == "entrada") {
    $soma = intval($base) + intval($quantidade);
    $query = "insert into movimento(data, nome, codigo, tipo, quantidade) values(?, ?, ?, ?, ?)";
    $sql = "UPDATE produto SET descricao='$descricao', valorunitario='$valorunitario', quantidade='$soma', categoria='$categoria', data='$data' WHERE codigo='$codigo'";
} else {
    $subtracao = intval($base) - intval($quantidade);
    $query = "insert into movimento(data, nome, codigo, tipo, quantidade) values(?, ?, ?, ?, ?)";
    $sql = "UPDATE produto SET descricao='$descricao', valorunitario='$valorunitario', quantidade='$subtracao', categoria='$categoria', data='$data' WHERE codigo='$codigo'";
}


if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sssss", $data, $nome, $codigo, $acao, $quantidade);
    $execval = $stmt->execute();
    if ($conn->query($sql) === TRUE) {
        $stmt->close();
        header("Location: $rota");
        exit;
    }
}
$conn->close();

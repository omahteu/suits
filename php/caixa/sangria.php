<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$urlBase/suits/html/caixa2.html";
$id = "1";
$data = $_POST["data_atual"];
$hora = $_POST["hora_atual"];
$nome = $_POST["nome_usuario"];
$saldo = $_POST["saldo_atual"];
$sangria = $_POST["valor_sangrado"];
$resultado = $saldo - $sangria;

$query = "INSERT INTO sangria(dia, hora, usuario, valor, ac, ns) values(?, ?, ?, ?, ?, ?)";
$sql = "UPDATE receita SET caixa='$resultado' WHERE id='$id'";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssssss", $data, $hora, $nome, $sangria, $saldo, $resultado);
    $execval = $stmt->execute();
    if ($conn->query($sql) === TRUE) {
        $stmt->close();
        $conn->close();
        header("Location: $rota");
        exit;
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

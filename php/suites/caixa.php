<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = $_POST["data"];
    $entrada = $_POST["entrada"];
    $usuario = $_POST["usuario"];
    $fundo = $_POST["fundo"];
    $total = $_POST["total"];
    $saida = $_POST["saida"];

    $query = "INSERT INTO caixa(data, entrada, usuario, fundo, total, saida) values(?, ?, ?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssss", $data, $entrada, $usuario, $fundo, $total, $saida);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

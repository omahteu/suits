<?php
include "../cnxInterna.php";





if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $rota = "$url/suits/html/cadastro.html";
    $codigo = $_POST["codigoSuite"];
    $numero = $_POST["numeroSuite"];
    $nome = $_POST["nomeSuite"];
    $hora = $_POST["horas_locacaoSuite"];
    $tolerancia = $_POST["toleranciaSuite"];
    $cobranca = $_POST["cobrancaSuite"];
    $excedente = $_POST["excedenteSuite"];
    $query = "insert into suite(codigoSuite, numeroSuite, nomeSuite, horas_locacaoSuite, toleranciaSuite, cobrancaSuite, excedenteSuite) values(?, ?, ?, ?, ?, ?, ?)";
    $query2 = "INSERT INTO valor (codigo, locacao, pernoite, vh1, vh2, vh3, vh4, vh5, vh6) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $a2 = '0';
    $a3 = '0';
    $a4 = '0';
    $a5 = '0';
    $a6 = '0';
    $a7 = '0';
    $a8 = '0';
    $a9 = '0';

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sssssss", $codigo, $numero, $nome, $hora, $tolerancia, $cobranca, $excedente);
        $execval = $stmt->execute();

        $stmt = $conn->prepare($query2);
        $stmt->bind_param("sssssssss", $codigo, $a2, $a3, $a4, $a5, $a6, $a7, $a8, $a9);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "<script>alert('Suíte cadastrada!'); window.location.href = '$rota';</script>";
        exit;
    }


}











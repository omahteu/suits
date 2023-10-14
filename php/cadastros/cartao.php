<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/cadastro.html";
$tipo = $_POST["tipo"];
$bandeira = $_POST["bandeira"];
$porcentagem = $_POST["porcentagem"];

if ($tipo == "1") {
    $query = "insert into credito(bandeira, porcentagem) values(?, ?)";
    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $bandeira, $porcentagem);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "<script>alert('Cartão cadastrada!'); window.location.href = '$rota';</script>";
        exit;
    }
} else {
    $query = "insert into debito(bandeira, porcentagem) values(?, ?)";
    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $bandeira, $porcentagem);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "<script>alert('Cartão cadastrada!'); window.location.href = '$rota';</script>";
        exit;
    }
}

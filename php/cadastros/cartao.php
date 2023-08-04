<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$urlBase/suits/html/cadastro.html";
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
        header("Location: http://192.168.11.8/suits/html/cadastro.html");
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
        header("Location: $rota");
        exit;
    }
}

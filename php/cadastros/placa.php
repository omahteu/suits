<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/cadastro.html";
$nome = $_POST["nome"];
$ip = $_POST["ip"];
$query = "insert into placa(nome, ip) values(?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $nome, $ip);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    echo "<script>alert('Placa cadastrada!'); window.location.href = '$rota';</script>";
    exit;
}

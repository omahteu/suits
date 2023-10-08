<?php
include "../cnxInterna.php";

$suite = $_POST["suite"];
$inicio = $_POST["inicio"];
$fim = $_POST["fim"];
$tempo = $_POST["tempo"];
$tipo = $_POST["tipo"];
$vsuite = $_POST["vsuite"];
$vconsumo = $_POST["vconsumo"];
$vadd = $_POST["vadd"];
$total = $_POST["total"];
$receber = $_POST["receber"];

$query = "insert into impressao(suite, inicio, fim, tempo, tipo, vsuite, vconsumo, vadd, total, receber) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssssssssss", $suite, $inicio, $fim, $tempo, $tipo, $vsuite, $vconsumo, $vadd, $total, $receber);
    $execval = $stmt->execute();
    $stmt->close();
    $conn->close();
    echo 'sucesso';
    exit;
}

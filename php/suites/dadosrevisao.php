<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $caixa = $_POST["caixa"];
    $data = $_POST["data"];
    $hora = $_POST["hora"];
    $suite = $_POST["suite"];
    $camareira = $_POST["camareira"];
    $motivo = $_POST["motivo"];

    $query = "INSERT INTO revisao(caixa, data, hora, suite, camareira, motivo) values(?, ?, ?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssss", $caixa, $data, $hora, $suite, $camareira, $motivo);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

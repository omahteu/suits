<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $caixa = $_POST["caixa"];
    $data = $_POST["data"];
    $hora = $_POST["hora"];
    $suite = $_POST["suite"];
    $tempo = $_POST["tempo"];
    $camareira = $_POST["camareira"];

    $query = "INSERT INTO limpeza(caixa, data, hora, suite, tempo, camareira) values(?, ?, ?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssss", $caixa, $data, $hora, $suite, $tempo, $camareira);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

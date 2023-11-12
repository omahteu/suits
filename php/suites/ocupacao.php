<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $data = $_POST["data"];
    $codigo = $_POST["codigo"];
    $suite = $_POST["suite"];
    $entrada = $_POST["entrada"];
    $saida = $_POST["saida"];
    $total = $_POST["total"];
    $forma = $_POST["forma"];

    $query = "INSERT INTO ocupacao(usuario, data, codigo, suite, entrada, saida, total, forma) values(?, ?, ?, ?, ?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssssss", $usuario, $data, $codigo, $suite, $entrada, $saida, $total, $forma);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

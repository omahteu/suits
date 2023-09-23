<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $caixa = $_POST["caixa"];
    $data = $_POST["data"];
    $hora = $_POST["hora"];
    $antigo = $_POST["antigo"];
    $novo = $_POST["novo"];

    $query = "INSERT INTO troca(caixa, data, hora, antigo, novo) values(?, ?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sssss", $caixa, $data, $hora, $antigo, $novo);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

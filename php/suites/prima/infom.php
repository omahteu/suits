<?php
include "../../cnxInterna.php";
include "../../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $hora = $_POST["hora"];
    $valor = $_POST["valor"];
    $suite = $_POST["suite"];
    $tipo = $_POST["tipo"];

    $query = "INSERT INTO infos(hora, valor, suite, tipo) values(?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssss", $hora, $valor, $suite, $tipo);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

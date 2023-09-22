<?php
include "../../cnxInterna.php";
include "../../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $suite = $_POST["suite"];
    $valor = $_POST["valor"];
    $tipo = $_POST["tipo"];

    $query = "INSERT INTO cofre(suite, valor, tipo) values(?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sss", $suite, $valor, $tipo);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

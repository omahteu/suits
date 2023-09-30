<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $suite = $_POST["suite"];
    $situacao = $_POST["situacao"];

    $query = "insert into acoes(suite, situacao) values(?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $suite, $situacao);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo 'sucesso';
        exit;
    }
}

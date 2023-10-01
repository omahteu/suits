<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $tempo = $_POST["data"];
    $nome = $_POST["entrada"];
    $data = $_POST["usuario"];

    $query = "INSERT INTO atividade(tempo, nome, data) values(?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sss", $tempo, $nome, $data);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

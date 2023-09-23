<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tabela = $_POST["tabela"];
    $coluna = $_POST["coluna"];
    $valor = $_POST["valor"];

    $query = "DELETE FROM $tabela WHERE $coluna = $valor";

    // if ($conn->connect_error) {
    //     echo "$conn->connect_error";
    //     die("Connection Failed : " . $conn->connect_error);
    // } else {
    //     $stmt = $conn->prepare($query);
    //     $stmt->bind_param("ssss", $suite, $modo, $tipo, $horario);
    //     $execval = $stmt->execute();
    //     $stmt->close();
    //     $conn->close();
    //     echo "sucesso";
    //     exit;

    //     if ($conn->query($sql) === TRUE) {
    //         $count = $conn->affected_rows;
    //         echo "Foram excluídos $count registros.";
    //     } else {
    //         echo "Erro ao executar a consulta: " . $conn->error;
    //     }
    // }

    if ($conn->query($query) === TRUE) {
        $count = $conn->affected_rows;
        echo "Foram excluídos $count registros.";
        $stmt->close();
        $conn->close();
        exit;
    } else {
        echo "Erro ao executar a consulta: " . $conn->error;
    }
}

<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tabela = $_POST["tabela"];
    $coluna = $_POST["coluna"];
    $valor = $_POST["valor"];

    $query = "DELETE FROM $tabela WHERE $coluna = $valor";

    if ($conn->query($query) === TRUE) {
        $count = $conn->affected_rows;
        echo "sucesso";
        $stmt->close();
        $conn->close();
        exit;
    } else {
        echo "Erro ao executar a consulta: " . $conn->error;
    }
}

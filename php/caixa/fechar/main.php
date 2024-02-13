<?php
include "../../cnxInterna.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter os valores dos campos do formulário
    $saida = isset($_POST["saida"]) ? $_POST["saida"] : '';
    $fundo = isset($_POST["fundo"]) ? $_POST["fundo"] : '';
    $total = isset($_POST["total"]) ? $_POST["total"] : '';

    // Consultar o ID mais recente
    $query = "SELECT id FROM caixa ORDER BY id DESC LIMIT 1";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        // Obter o ID
        $rr = $result->fetch_assoc();
        $codig = $rr["id"];

        // Atualizar o registro no banco de dados
        $sql = "UPDATE caixa SET fundo='$fundo', total='$total', saida='$saida' WHERE id='$codig'";

        if ($conn->query($sql) === TRUE) {
            $conn->close();
            echo "sucesso";
            exit;
        } else {
            echo "Erro ao atualizar o registro: " . $conn->error;
        }
    } else {
        echo "Nenhum registro encontrado na tabela caixa.";
    }
} else {
    echo "Método de requisição inválido.";
}

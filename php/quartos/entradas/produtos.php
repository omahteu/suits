<?php
include "../../cnxInterna.php";

function fetchProdutos($conn) {
    $query = "SELECT * FROM produto";
    $resultado = $conn->query($query);

    if ($resultado->num_rows > 0) {
        $dados = [];

        while($row = $resultado->fetch_assoc()) {
            $dados[] = [
                'id' => $row["id"],
                'codigo' => $row["codigo"],
                'descricao' => $row["descricao"],
                'valorunitario' => $row["valorunitario"],
                'quantidade' => $row["quantidade"],
                'categoria' => $row["categoria"],
                'data' => $row["data"]
            ];
        }

        return ['status' => true, 'dados' => $dados];
    } else {
        return ['status' => false, 'msg' => "Nenhum produto encontrado."];
    }
}

echo json_encode(fetchProdutos($conn));

<?php
include "../../cnxInterna.php";

$query = "SELECT id, data, entrada, usuario, fundo, total, saida FROM caixa";
$resultado = $conn->query($query);

if ($resultado->num_rows > 0) {
    $dados = [];
    
    while ($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'data' => $row["data"],
            'entrada' => $row["entrada"],
            'usuario' => $row["usuario"],
            'fundo' => $row["fundo"],
            'total' => $row["total"],
            'saida' => $row["saida"]
        ];
    }

    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}

header('Content-Type: application/json');
echo json_encode($retorna, JSON_PRETTY_PRINT);

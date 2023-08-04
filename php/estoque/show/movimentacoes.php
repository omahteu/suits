<?php
include "../../cnxInterna.php";
$query = "SELECT id, data, nome, codigo, tipo, quantidade FROM movimento";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'data' => $row["data"],
            'nome' => $row["nome"],
            'codigo' => $row["codigo"],
            'tipo' => $row["tipo"],
            'quantidade' => $row["quantidade"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
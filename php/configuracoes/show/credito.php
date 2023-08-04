<?php
include "../../cnxInterna.php";
$query = "SELECT id, bandeira, porcentagem FROM credito";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'bandeira' => $row["bandeira"],
            'porcentagem' => $row["porcentagem"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
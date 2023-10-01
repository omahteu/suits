<?php
include "../cnxInterna.php";
$query = "SELECT id, tempo, nome, data FROM atividade";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'tempo' => $row["tempo"],
            'nome' => $row["nome"],
            'data' => $row["data"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
}
echo json_encode($retorna);
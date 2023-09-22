<?php
include "../../cnxInterna.php";
$query = "SELECT id, suite, modo, tipo, horario FROM tarefa";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'suite' => $row["suite"],
            'modo' => $row["modo"],
            'tipo' => $row["tipo"],
            'horario' => $row["horario"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

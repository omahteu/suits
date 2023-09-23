<?php
include "../../cnxInterna.php";
$query = "SELECT id, suite, placa, modelo FROM patio";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'suite' => $row["suite"],
            'placa' => $row["placa"],
            'modelo' => $row["modelo"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

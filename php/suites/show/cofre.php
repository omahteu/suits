<?php
include "../../cnxInterna.php";
$query = "SELECT id, suite, valor, tipo FROM cofre";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'suite' => $row["suite"],
            'valor' => $row["valor"],
            'tipo' => $row["tipo"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

<?php
include "../../cnxInterna.php";
$query = "SELECT id, parcial, marca, horizontais, verticais, fonte FROM impressora";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'parcial' => $row["parcial"],
            'marca' => $row["marca"],
            'horizontais' => $row["horizontais"],
            'verticais' => $row["verticais"],
            'fonte' => $row["fonte"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

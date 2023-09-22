<?php
include "../../cnxInterna.php";
$query = "SELECT id, hora, valor, suite, tipo FROM infos";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'hora' => $row["hora"],
            'valor' => $row["valor"],
            'suite' => $row["suite"],
            'tipo' => $row["tipo"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

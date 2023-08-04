<?php
include "../../cnxInterna.php";
$query = "SELECT id, permanenciaPernoite, inicioPernoite, fimPernoite, tipoPernoite FROM pernoite";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'permanenciaPernoite' => $row["permanenciaPernoite"],
            'inicioPernoite' => $row["inicioPernoite"],
            'fimPernoite' => $row["fimPernoite"],
            'tipoPernoite' => $row["tipoPernoite"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
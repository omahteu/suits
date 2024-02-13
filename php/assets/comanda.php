<?php
include "../cnxInterna.php";
$query = "SELECT * FROM comanda";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'suite' => $row["suite"],
            'descricao' => $row["descricao"],
            'quantidade' => $row["quantidade"],
            'valor_total' => $row["valor_total"],
            'valor_unitario' => $row["valor_unitario"],
            'hora' => $row["hora"],
            'valor_suite' => $row["valor_suite"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
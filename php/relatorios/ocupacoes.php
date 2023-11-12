<?php
include "../cnxInterna.php";
$query = "SELECT id, usuario, data, codigo, suite, entrada, saida, total, forma FROM ocupacao";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'usuario' => $row["usuario"],
            'data' => $row["data"],
            'codigo' => $row["codigo"],
            'suite' => $row["suite"],
            'entrada' => $row["entrada"],
            'saida' => $row["saida"],
            'total' => $row["total"],
            'forma' => $row["forma"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
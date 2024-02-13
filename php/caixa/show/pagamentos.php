<?php
include "../../cnxInterna.php";
$query = "SELECT id, total, forma, parcelas, data, usuario, codigo, suite, entrada, saida, permanencia, consumo FROM pagamento";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'total' => $row["total"],
            'forma' => $row["forma"],
            'parcelas' => $row["parcelas"],
            'data' => $row["data"],
            'usuario' => $row["usuario"],
            'codigo' => $row["codigo"],
            'suite' => $row["suite"],
            'entrada' => $row["entrada"],
            'saida' => $row["saida"],
            'permanencia' => $row["permanencia"],
            'consumo' => $row["consumo"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

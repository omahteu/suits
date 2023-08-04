<?php
include "../cnxInterna.php";
$query = "SELECT id, codigoSuite, numeroSuite, nomeSuite, horas_locacaoSuite, toleranciaSuite, cobrancaSuite, excedenteSuite FROM suite";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'codigoSuite' => $row["codigoSuite"],
            'numeroSuite' => $row["numeroSuite"],
            'nomeSuite' => $row["nomeSuite"],
            'horas_locacaoSuite' => $row["horas_locacaoSuite"],
            'toleranciaSuite' => $row["toleranciaSuite"],
            'cobrancaSuite' => $row["cobrancaSuite"],
            'excedenteSuite' => $row["excedenteSuite"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
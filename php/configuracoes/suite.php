<?php
include "../conexao.php";
$query = "SELECT id, codigo, numero, nome FROM suite";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'codigo' => $row["codigo"],
            'numero' => $row["numero"],
            'nome' => $row["nome"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
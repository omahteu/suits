<?php
include "../cnxInterna.php";
$query = "SELECT id, codigo, descricao, valorunitario, quantidade, categoria, data FROM produto";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'codigo' => $row["codigo"],
            'descricao' => $row["descricao"],
            'valorunitario' => $row["valorunitario"],
            'quantidade' => $row["quantidade"],
            'categoria' => $row["categoria"],
            'data' => $row["data"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
<?php
include "../../cnxInterna.php";
$query = "SELECT id, codigo, locacao, pernoite, vh1, vh2, vh3, vh4, vh5, vh6 FROM valor";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'codigo' => $row["codigo"],
            'locacao' => $row["locacao"],
            'pernoite' => $row["pernoite"],
            'vh1' => $row["vh1"],
            'vh2' => $row["vh2"],
            'vh3' => $row["vh3"],
            'vh4' => $row["vh4"],
            'vh5' => $row["vh5"],
            'vh6' => $row["vh6"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

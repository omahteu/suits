<?php

include "../cnxInterna.php";
$query = "SELECT id, usuarioUsuario, senhaUsuario, tipoUsuario FROM usuarios";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'usuarioUsuario' => $row["usuarioUsuario"],
            'senhaUsuario' => $row["senhaUsuario"],
            'tipoUsuario' => $row["tipoUsuario"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

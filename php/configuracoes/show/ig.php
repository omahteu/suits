<?php
include "../../cnxInterna.php";
$query = "SELECT id, socialIg, fantasiaIg, cnpjIg, cidadeIg, enderecoIg, numeroIg, 	bairroIg, telefoneIg, telefone2Ig, telefone3Ig FROM ig";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'socialIg' => $row["socialIg"],
            'fantasiaIg' => $row["fantasiaIg"],
            'cnpjIg' => $row["cnpjIg"],
            'cidadeIg' => $row["cidadeIg"],
            'enderecoIg' => $row["enderecoIg"],
            'numeroIg' => $row["numeroIg"],
            'bairroIg' => $row["bairroIg"],
            'telefoneIg' => $row["telefoneIg"],
            'telefone2Ig' => $row["telefone2Ig"],
            'telefone3Ig' => $row["telefone3Ig"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

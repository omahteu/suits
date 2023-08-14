<?php
include "../cnxExterna.php";
$query = "SELECT id, usuario, senha, tipo, tipoUsuario FROM clientes";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'usuario' => $row["usuario"],
            'senha' => $row["senha"],
            'tipo' => $row["tipo"],
            'tipoUsuario' => $row["tipoUsuario"]
        ];
        $data = array(
            "usuario" => $row["usuario"],
            "tipo" => $row["tipo"]
        );
    }
    $arquivo = 'data.json';
    $json = json_encode($data);
    $file = fopen("../../$arquivo",'w');
    fwrite($file, $json);
    fclose($file);
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
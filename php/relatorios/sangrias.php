<?php
include "../cnxInterna.php";
$query = "SELECT id, dia, hora, usuario, valor, ac, ns FROM sangria";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'dia' => $row["dia"],
            'hora' => $row["hora"],
            'usuario' => $row["usuario"],
            'valor' => $row["valor"],
            'ac' => $row["ac"],
            'ns' => $row["ns"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);
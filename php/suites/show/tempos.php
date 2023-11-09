<?php
include "../../cnxInterna.php";
$query = "SELECT id, desistenciaTempo, faxinaTempo, limpezaTempo, manutencaoTempo, trocaTempo, revisaoTempo FROM tempo";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'desistenciaTempo' => $row["desistenciaTempo"],
            'faxinaTempo' => $row["faxinaTempo"],
            'limpezaTempo' => $row["limpezaTempo"],
            'manutencaoTempo' => $row["manutencaoTempo"],
            'trocaTempo' => $row["trocaTempo"],
            'revisaoTempo' => $row["revisaoTempo"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

<?php
include "../cnxInterna.php";

// Nome da tabela fornecido como parâmetro (substitua 'nome_da_tabela' pelo nome desejado)
$nome_da_tabela = "comanda";

$query = "SELECT * FROM $nome_da_tabela"; // Query dinâmica com o nome da tabela
$resultado = $conn->query($query);

if ($resultado->num_rows > 0) {
    $dados = array();
    while($row = $resultado->fetch_assoc()) {
        // Adiciona os dados de cada linha à matriz $dados
        $dados[] = $row;
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

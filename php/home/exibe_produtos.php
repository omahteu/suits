<?php
include "../cnxInterna.php";
$query = "SELECT id, codigo, descricao, valorunitario, quantidade, categoria, data FROM produto";
$resultado = $conn->query($query);
if ($resultado === false) {
    // Ocorreu um erro na consulta
    echo "Ocorreu um erro na consulta: " . $conn->error;
} elseif ($resultado->num_rows === 0) {
    // A consulta não retornou nenhum resultado
    $retorna = ['status' => false, 'msg' => "ERRO"];
} else {
    // A consulta retornou resultados
    while ($linha = $resultado->fetch_assoc()) {
        // Processar cada linha do resultado aqui
        echo $linha;
    }
}
echo json_encode($retorna);
// Liberar o resultado
$resultado->close();

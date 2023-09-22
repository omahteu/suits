<?php
// Verifique se a solicitação é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém o corpo da solicitação JSON
    $data = file_get_contents('php://input');

    $array = [];

    // Converte a string de consulta em um array associativo
    parse_str($data, $array);

    // Agora, $array contém os dados como um array associativo
    //print_r($array);

    // Converte o JSON em um array associativo
    // $dados = json_encode($data);
    // $dados = json_decode($dados, true);

    if ($array !== null) {
        // Itera por todas as chaves e valores
        foreach ($array as $chave => $valor) {
            // Faça algo com a chave e o valor, por exemplo, imprimir na tela
            echo "Chave: $chave, Valor: $valor<br>";
        }
    } else {
        echo "Erro ao decodificar JSON.";
    }
} else {
    echo "Acesso não permitido.";
}
?>

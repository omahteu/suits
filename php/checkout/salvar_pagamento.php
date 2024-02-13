<?php
header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../cnxInterna.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $total = $_POST["total"];
    $forma = $_POST["forma"];
    $parcelas = $_POST["parcelas"];
    $data = $_POST["data"];
    $usuario = $_POST["usuario"];
    $codigo = $_POST["codigo"];
    $suite = $_POST["suite"];
    $entrada = $_POST["entrada"];
    $saida = $_POST["saida"];
    $permanencia = $_POST["permanencia"];
    $consumo = $_POST["consumo"];

    $query = "INSERT INTO pagamento(
        total, forma, parcelas, data, usuario, codigo, suite, entrada, saida, permanencia, consumo
    ) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param(
            "sssssssssss", 
            $total, $forma, $parcelas, $data, $usuario, $codigo, $suite, $entrada, $saida, $permanencia, $consumo
        );
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

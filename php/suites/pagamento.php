<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $valor = $_POST["valor"];
    $forma = $_POST["forma"];
    $parcelas = $_POST["parcelas"];
    $data = $_POST["data"];
    $usuario = $_POST["usuario"];
    $nota = "";

    $query = "INSERT INTO pagamento(valor, forma, parcelas, data, usuario, nota) values(?, ?, ?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssssss", $valor, $forma, $parcelas, $data, $usuario, $nota);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

<?php
header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include "../cnxExterna.php";
$token = $_POST["token"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $query = "SELECT COUNT(*) AS count FROM usuarios WHERE token = '$token';";
    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $resultado = $conn->query($query);
        if (!$resultado) {
            die("Erro na query: " . $conn->error);
        }
        $row = $resultado->fetch_assoc();
        $count = $row['count'];
        if ($count == 1) {
            $dadosQuery = "SELECT estado FROM usuarios WHERE token = '$token';";
            $resultadoDados = $conn->query($dadosQuery);
            if (!$resultadoDados) {
                die("Erro na query de dados: " . $conn->error);
            }
            $dadosUsuario = $resultadoDados->fetch_assoc();
            echo json_encode($dadosUsuario);
        } else {
            echo json_encode($row);
        }
        $conn->close();
        exit;
    }
}

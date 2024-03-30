<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$dbname = "palace";
$port = 3306;
$conn = new mysqli($servidor, $usuario, $senha, $dbname, $port);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

<?php
include "../cnxInterna.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $suite = $_POST["suite"];
    $modo = $_POST["modo"];
    $tipo = $_POST["tipo"];
    $horario = $_POST["horario"];

    $query = "INSERT INTO tarefa(suite, modo, tipo, horario) values(?, ?, ?, ?)";

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ssss", $suite, $modo, $tipo, $horario);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
    }
}

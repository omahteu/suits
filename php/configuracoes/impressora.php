<?php
include "../cnxInterna.php";
include "../../urlbase.php";
include "../../urlbase.php";
$rota = "$url/suits/html/configuracoes.html";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $parcial = $_POST["parcial"];
    $impressora = $_POST["impressora"];
    $horizontais = $_POST["horizontais"];
    $verticais = $_POST["verticais"];
    $fonte = $_POST["fonte"];

    $sql = "UPDATE impressora SET parcial='$parcial', marca='$impressora', horizontais='$horizontais', verticais='$verticais', fonte='$fonte' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Impressora atualizada!'); window.location.href = '$rota';</script>";
        exit;
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close();
}
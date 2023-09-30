<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $codigo = $_POST["codigo"];
    $descricao = $_POST["descricao"];
    $valorunitario = $_POST["valorunitario"];
    $quantidade = $_POST["quantidade"];
    $categoria = $_POST["categoria"];
    $data = $_POST["data"];

    $sql = "UPDATE produto SET descricao='$descricao', valorunitario='$valorunitario', quantidade='$quantidade', categoria='$categoria', data='$data' WHERE codigo='$codigo'";

    if ($conn->query($sql) === TRUE) {
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
      } else {
        echo "Error updating record: " . $conn->error;
      }
      
}

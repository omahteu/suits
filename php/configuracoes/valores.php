<?php
include "../cnxInterna.php";
include "../../urlbase.php";
$rota = "$url/suits/html/configuracoes.html";
$codigo = $_POST["selecionarSuite"];
$locacao = $_POST["valorLocacaoQuarto"];
$pernoite = $_POST["valorPernoite"];
$vh1 = $_POST["v1hQuarto"];
$vh2 = $_POST["v2hQuarto"];
$vh3 = $_POST["v3hQuarto"];
$vh4 = $_POST["v4hQuarto"];
$vh5 = $_POST["v5hQuarto"];
$vh6 = $_POST["v6hQuarto"];

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "UPDATE valor SET locacao='$locacao', pernoite='$pernoite', vh1='$vh1', vh2='$vh2', vh3='$vh3', vh4='$vh4', vh5='$vh5', vh6='$vh6' WHERE codigo='$codigo'";
  
  if ($conn->query($sql) === TRUE) {
    header("Location: $rota");
    exit;
  } else {
    echo "Error updating record: " . $conn->error;
  }
  
  $conn->close();

<?php
include "../cnxInterna.php";
include "../../urlbase.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $antigo = $_POST["antigo"];
    $novo = $_POST["novo"];


    $sql = "UPDATE cofre SET valor='$novo' WHERE suite='$antigo'";

    // if ($conn->connect_error) {
    //     echo "$conn->connect_error";
    //     die("Connection Failed : " . $conn->connect_error);
    // } else {
    //     $stmt = $conn->prepare($query);
    //     $stmt->bind_param("ssss", $suite, $modo, $tipo, $horario);
    //     $execval = $stmt->execute();
    //     $stmt->close();
    //     $conn->close();
    //     echo "sucesso";
    //     exit;


        
    // }
    if ($conn->query($sql) === TRUE) {
        $stmt->close();
        $conn->close();
        echo "sucesso";
        exit;
      } else {
        echo "Error updating record: " . $conn->error;
      }
      
}

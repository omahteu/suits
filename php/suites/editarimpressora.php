<?php
include "../cnxInterna.php";
include "../../urlbase.php";
include "../../urlbase.php";
$rota = "$url/suits/html/impressoras.html";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = '1';
    $imp = $_POST["impressoras_existentes"];

    $sql = "UPDATE mimpressora SET emuso='$imp' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        header("Location: $rota");
        exit;
    } else {
        echo "Error updating record: " . $conn->error;
    }

}
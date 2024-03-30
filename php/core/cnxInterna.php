<?php

// @include_once "../urlbase.php";
// @$servidor = $hosti;
$servidor = 'localhost';
$usuario = "root";
$senha = "";
$dbname = "palace";
$port = 3306;
$conn = new mysqli($servidor, $usuario, $senha, $dbname, $port);

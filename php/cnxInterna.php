<?php

@include_once "../urlbase.php";
@$servidor = $hosti;
$usuario = "admin";
$senha = "Tiadm123@";
$dbname = "palace";
$port = 3306;
$conn = new mysqli($servidor, $usuario, $senha, $dbname, $port);

<?php

include "../urlbase.php";
$servidor = $url;
$usuario = "admin";
$senha = "Tiadm123@";
$dbname = "palace";
$port = 3306;
$conn = new mysqli($servidor, $usuario, $senha, $dbname, $port);

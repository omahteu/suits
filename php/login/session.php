<?php
session_start();

if(isset($_SESSION['usuario'])) {
    echo json_encode($_SESSION);
} else {
    echo json_encode($_SESSION);
}

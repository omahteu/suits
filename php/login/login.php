<?php

include "./core.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST["usuario"]) && isset($_POST["senha"])) {

        $usuario = mysqli_real_escape_string($conn, $_POST["usuario"]);
        $senha = mysqli_real_escape_string($conn, $_POST["senha"]);

        $sql = "SELECT * FROM usuarios WHERE usuarioUsuario = '$usuario' AND senhaUsuario = '$senha'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            session_start();
            $row = $result->fetch_assoc(); // Obtém a linha do resultado
            $_SESSION["usuario"] = $usuario;
            $_SESSION["tipoUsuario"] = $row["tipoUsuario"]; // Salva o tipo de usuário na sessão
            header("Location: ../../html/home.html");
            exit();
        } else {
            http_response_code(401);
            echo "Usuário e/ou senha inválidos.";
        }

        $conn->close();
    } else {
        http_response_code(400);
        echo "Por favor, preencha todos os campos.";
    }
} else {
    http_response_code(405);
    echo "Método não permitido.";
}

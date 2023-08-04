<?php
include "../../cnxInterna.php";
$query = "SELECT id, usuarioEmail, senhaEmail, smtpEmail, portaEmail, timeoutEmail, email_destino, 	email_contabilidade, autenticacaoEmail FROM emeil";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'usuarioEmail' => $row["usuarioEmail"],
            'senhaEmail' => $row["senhaEmail"],
            'smtpEmail' => $row["smtpEmail"],
            'portaEmail' => $row["portaEmail"],
            'timeoutEmail' => $row["timeoutEmail"],
            'email_destino' => $row["email_destino"],
            'email_contabilidade' => $row["email_contabilidade"],
            'autenticacaoEmail' => $row["autenticacaoEmail"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
} else {
    $retorna = ['status' => false, 'msg' => "ERRO"];
}
echo json_encode($retorna);

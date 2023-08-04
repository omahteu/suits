import { rook } from "../../../token.js";

async function cliente_auth() {
    const dados = await fetch("http://localhost/suites/php/lerusuario.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        let usuario = $("#usuario")
        let senha = $("#senha")

        if (usuario.val() == infos[0].usuario) {
            if (senha.val() == infos[0].senha) {
                if (infos[0].status == "on") {
                    console.log("passou")
                }
            } else {
                alert('Senha Inválida')
                senha.focus()
                return
            }
        } else {
            alert('Usuário Inválido')
            usuario.focus()
            return
        }

    } else {
        console.log(resposta["msg"])
    }
}

$(document).on("click", "#btn-acessar", function() {
    cliente_auth()
})

// import link from "../../setup/index.js"
// import { hora_atual } from "../../geradores/hora.js";
import {RAIZ} from "../../raiz.js"

// var mensagem = `[SUCESSO] | Tarefa Executada | ${hora_atual()}`

// export function atualizarTarefa(id, modo) {
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         url: `${link[34]}${id}/`,
//         type: 'PATCH',
//         data: JSON.stringify({ "modo": modo }),
//         success: function () {
//             console.log(mensagem);
//         },
//         error: function (textStatus, errorThrown) {
//             sessionStorage.setItem("tarefa.js", `[LOGS] | ${textStatus} - ${errorThrown}`)
//         }
//     })
// }

export function atualizarTarefa(id, modo) {
    var xhr = new XMLHttpRequest();
    // var url = url;

    xhr.open("POST", `http://${RAIZ}/suits/php/suites/show/tarefas.php`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // A resposta do PHP pode ser manipulada aqui (se necessário)
            console.log(xhr.responseText);

            // alerta == true ? alert(mensagem) : ""
            // recarregar == true ? location.reload() : ""
            // resetar != "" ? document.getElementById(resetar).reset() : ""
        }
    };

    var dados = "id=" + id + "&modo=" + modo;
    xhr.send(dados);
}
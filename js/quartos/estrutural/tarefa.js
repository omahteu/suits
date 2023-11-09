import {RAIZ} from "../../raiz.js"

export function atualizarTarefa(id, modo) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `http://${RAIZ}/suits/php/suites/editartarefas.php`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // A resposta do PHP pode ser manipulada aqui (se necessário)
        }
    };
    var dados = "id=" + id + "&modo=" + modo;
    xhr.send(dados);
}

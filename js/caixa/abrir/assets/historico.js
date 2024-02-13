import fazerRequisicaoAjax from "../../../tools/ajax.js";
import makeUrl from "../../../tools/urls.js";

function updateHistoricoTable(data, user) {
    const historico = document.getElementById("tab_historico");
    historico.innerHTML = "";

    const userEntries = data.filter(entry => entry.usuario === user);

    userEntries.forEach(entry => {
        historico.innerHTML += `
            <tr>
                <td>${entry.data}</td>
                <td>${entry.entrada}</td>
                <td>${entry.usuario}</td>
                <td>${entry.fundo}</td>
                <td>${entry.total}</td>
                <td>${entry.saida}</td>
            </tr>`;
    });
}

function handleSuccess(response) {
    if (response.status) {
        updateHistoricoTable(response.dados, localStorage.getItem("nome"));
    } else {
        console.error("Erro na solicitação. Contate o Administrador.");
    }
}

function handleError(error) {
    console.error(error);
}

export default function historico() {
    const url = makeUrl("caixa/abrir", "historico.php");
    const user = localStorage.getItem("nome");

    fazerRequisicaoAjax(url, "GET", null, handleSuccess, handleError);
}

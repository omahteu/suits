import {url} from "../../../urlbase.js"

$(document).on("click", "#aba_tempo", function() {
    tempos()
})

async function tempos() {
    const rq = await fetch(`${url}suits/php/configuracoes/show/tempos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var tabela = document.getElementById("tabelaTempos")
        tabela.innerHTML = ""
        rs["dados"].forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>${e.desistenciaTempo}</td>
                    <td>${e.faxinaTempo}</td>
                    <td>${e.limpezaTempo}</td>
                    <td>${e.manutencaoTempo}</td>
                    <td>${e.trocaTempo}</td>
                    <td>
                        <buttoon type="button" class="btn btn-primary" id="scet" value="${e.id}">Alterar</button>
                    </td>
                </tr>
            `
        })
    }
}

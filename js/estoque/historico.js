import {url} from "../../urlbase.js"

$(document).on("click", "#tab_historico", function(){
    historico_movimentacoes()
})

async function historico_movimentacoes(){
    const rq = await fetch(`${url}suits/php/estoque/show/movimentacoes.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var tabela = document.getElementById("tabelaHistoricoMovimentacoes")
        tabela.innerHTML = ''
        rs["dados"].forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>${e.data}</td>
                    <td>${e.codigo}</td>
                    <td>${e.tipo}</td>
                    <td>${e.quantidade}</td>
                </tr>
            `
        });
    }
}

import {url} from "../../urlbase.js"

$(document).on("click", "#tab_ocupacoes", function() {
    relatorioOcupacoes()
})

async function relatorioOcupacoes(){
    const rq = await fetch(`${url}suits/php/relatorios/ocupacoes.php`)
    const rs = await rq.json()
    if(rs["status"]) {
        var tabela = document.getElementById('tabelaRelatorioOcupacoes')
        tabela.innerHTML = ''
        rs["dados"].forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>${e.usuario}</td>
                    <td>${e.data}</td>
                    <td>${e.codigo}</td>
                    <td>${e.quarto}</td>
                    <td>${e.entrada}</td>
                    <td>${e.saida}</td>
                    <td>${e.total}</td>
                </tr>
            `
        });
    }
}

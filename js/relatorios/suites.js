import {url} from "../../urlbase.js"

$(document).on("click", "#tab_suites", function() {
    relatorioQuartos()
})

async function relatorioQuartos(){
    const rq = await fetch(`${url}suits/php/relatorios/suites.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var tabela = document.getElementById('tabrlaRelatorioQuartos')
        tabela.innerHTML = ''
        rs["dados"].forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>${e.codigoSuite}</td>
                    <td>${e.numeroSuite}</td>
                    <td>${e.nomeSuite}</td>
                    <td>${e.horas_locacaoSuite}</td>
                    <td>${e.toleranciaSuite}</td>
                    <td>${e.cobrancaSuite}</td>
                    <td>${e.excedenteSuite}</td>
                </tr>
            `
        });
    }
}

import {url} from "../../urlbase.js"

$(document).on("click", "#tab_camareiras", function() {
    camareira()
})

async function camareira() {
    const rq = await fetch(`${url}suits/php/relatorios/camareiras.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var tabela = document.getElementById('tabelaRelatorioCamareira')
        tabela.innerHTML = ''
        rs["dados"].forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>${e.nome}</td>
                    <td>${e.codigo}</td>
                </tr>
            `
        });
    }
}

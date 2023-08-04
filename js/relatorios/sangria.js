import {url} from "../../urlbase.js"

$(document).on("click", "#tab_sangrias", function() {
    relatorioSangria()
})

async function relatorioSangria(){
    const rq = await fetch(`${url}suits/php/relatorios/sangrias.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var tabela = document.getElementById('tabelaRelatorioSangria')
        tabela.innerHTML = ''
        rs["dados"].forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>${e.dia}</td>
                    <td>${e.hora}</td>
                    <td>${e.usuario}</td>
                    <td>${e.valor}</td>
                    <td>${e.ac}</td>
                    <td>${e.nc}</td>
                </tr>
            `
        });
    }
}

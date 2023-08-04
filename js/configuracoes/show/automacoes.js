import {url} from "../../../urlbase.js"

$(document).on("click", "", function() {
    automacoes()
})

async function automacoes(){
    const rq = await fetch(`${url}suits/php/configuracoes/show/automacoes.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var tabela = document.getElementById("tabelaAutomacao")
        tabela.innerHTML = ""
        rs["dados"].forEach(e => {


            tabela.innerHTML += `
                <tr>
                    <td>${e.suite}</td>
                    <td>${e.placa}</td>
                    <td>${e.rele}</td>
                    <td>
                        <button type="button" data-toggle="${e.id}" name="${e.suite}" class="btn btn-primary" id="editar">Editar</button>
                    </td>
                </tr>
            `
        });
    }
}

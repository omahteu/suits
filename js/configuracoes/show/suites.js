import {url} from "../../../urlbase.js"

$(document).on("click", "#aba_valor", function() {
    lsuites()
})

async function lsuites() {
    const rq = await fetch(`${url}suits/php/configuracoes/show/suites.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            $("#selecionarSuite").append(`<option data-toggle="${e.id}" value="${e.codigoSuite}">${e.numeroSuite}</option>`)
        });
    }
}

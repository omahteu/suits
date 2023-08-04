import {url} from "../../../urlbase.js"

$(document).on("click", "#aba_pernoite", function() {
    pernoite()
})

async function pernoite() {
    const rq = await fetch(`${url}suits/php/configuracoes/show/pernoite.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            $("#permanenciaPernoite").val(e.permanenciaPernoite)
            $("#inicioPernoite").val(e.inicioPernoite)
            $("#fimPernoite").val(e.fimPernoite)
            e.tipoPernoite == "1" ? $("#tipoPernoite").val(1) : $("#tipoPernoite").val(2)
        });
    }
}

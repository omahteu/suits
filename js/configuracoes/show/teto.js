import {url} from "../../../urlbase.js"

$(document).on("click", "#aba_teto", function() {
    teto()
})

async function teto(){
    const rq = await fetch(`${url}suits/php/configuracoes/show/teto.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            $("#tetoCaixa").val(e.tetoCaixa)
        });
    }
}

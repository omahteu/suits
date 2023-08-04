import {url} from "../../../urlbase.js"

$(document).on("click", "#aba_ig", function () {
    ig()
})

async function ig() {
    const rq = await fetch(`${url}suits/php/configuracoes/show/ig.php`)
    const rs = await rq.json()
    if(rs["status"]) {
        rs["dados"].forEach(e => {
            $("#socialIg").attr("value", e.socialIg)
            $("#fantasiaIg").attr("value", e.fantasiaIg)
            $("#cnpjIg").attr("value", e.cnpjIg)
            $("#cidadeIg").attr("value", e.cidadeIg)
            $("#enderecoIg").attr("value", e.enderecoIg)
            $("#numeroIg").attr("value", e.numeroIg)
            $("#bairroIg").attr("value", e.bairroIg)
            $("#telefoneIg").attr("value", e.telefoneIg)
            $("#telefone2Ig").attr("value", e.telefone2Ig)
            $("#telefone3Ig").attr("value", e.telefone3Ig)
        })
    }
}

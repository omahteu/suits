import {url} from "../../../urlbase.js"

$(document).on("click", "#aba_mail", function () {
    mail()
})

async function mail() {
    const rq = await fetch(`${url}suits/php/configuracoes/show/mail.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            $("#usuarioEmail").attr("value", e.usuarioEmail)
            $("#senhaEmail").attr("value", e.senhaEmail)
            $("#smtpEmail").attr("value", e.smtpEmail)
            $("#portaEmail").attr("value", e.portaEmail)
            $("#timeoutEmail").attr("value", e.timeoutEmail)
            $("#email_destino").attr("value", e.email_destino)
            $("#email_contabilidade").attr("value", e.email_contabilidade)
            let auth = $("#autenticacaoEmail")
            e.autenticacaoEmail == "1" ? auth.val("1") : auth.val("0")
        });
    }
}

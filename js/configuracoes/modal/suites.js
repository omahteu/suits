import {url} from "../../../urlbase.js"

$(document).on("change", "#selecionarSuite", function () {
    let codi = $(this).val()
    rsuites(codi)
})

async function rsuites(codigo) {
    const rq = await fetch(`${url}suits/php/configuracoes/show/valores.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let filtro = rs["dados"].filter(x => x.codigo == codigo)
        filtro.forEach(e => {
            $("#valorLocacaoQuarto").val(e.locacao)
            $("#valorPernoite").val(e.pernoite)
            $("#v1hQuarto").val(e.vh1)
            $("#v2hQuarto").val(e.vh2)
            $("#v3hQuarto").val(e.vh3)
            $("#v4hQuarto").val(e.vh4)
            $("#v5hQuarto").val(e.vh5)
            $("#v6hQuarto").val(e.vh6)
        });
    }
}

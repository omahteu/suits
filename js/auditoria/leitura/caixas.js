import link from "../../setup/index.js"

$(document).ready(function () {
    caixas()
})

async function caixas() {
    const rq = await fetch(link[20])
    const rs = await rq.json()
    const selecionados = rs.filter(e => e.status == "Caixa")
    selecionados.forEach(e => {
        $("#codigo_caixa").append(`<option>${e.nome}</option>`)
    });
}

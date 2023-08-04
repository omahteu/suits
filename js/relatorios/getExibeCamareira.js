import link from "../setup/index.js"

$(document).ready(function() {
    nomes_camareiras()
})

async function nomes_camareiras() {
    const rq = await fetch(link[3])
    const rs = await rq.json()
    rs.forEach(i => {
        $('#comboCamareiras').append(`<option>${i.nome}</option>`);
        $('#selecionaCamareira').append(`<option>${i.nome}</option>`);
        $("#camareiras").append(`<option>${i.nome}</option>`)
    });
}

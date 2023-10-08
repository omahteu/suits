import {RAIZ} from "../../raiz.js"

$(document).on('change', '#impressora', function() {
    let marca = $(this).val()
    impressoras(marca)
})

async function impressoras(marca) {
    const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/impressora.php`)
    const rs = await rq.json()
    if (rs['status']) {
        let filtro = rs['dados'].filter(z => z.marca == marca)
        $("#id").val(filtro[0].id)
        $("#parcial").val(filtro[0].parcial)
        $("#horizontais").val(filtro[0].horizontais)
        $("#verticais").val(filtro[0].verticais)
        $("#fonte").val(filtro[0].fonte)
    }
}
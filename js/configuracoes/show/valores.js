import {RAIZ} from "../../raiz.js"


$(document).on("change", "#selecionarSuite", function() {
    let suite = $(this).val()
    showed(suite)
})

async function showed(suite) {
    const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/valores.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let filtro = rs["dados"].filter(x => x.codigo == suite)
        console.log(filtro)
    }
}
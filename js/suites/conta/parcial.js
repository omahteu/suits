import {RAIZ} from "../../raiz.js"

$(document).on('click', '[class="card"]', function () {
	let r1 = $(this)
	let r2 = $(r1[0].children[0])
	let r3 = $(r2[0].children[1])
	let suite = r3.text()
    setTimeout(() => {
        let consumo = parseFloat($("#consumo_painel").text())
        calculo(suite, consumo)
    }, 1000);
})

async function calculo(suite, consumo) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let filtroValores = rs["dados"].filter(x => x.suite == suite)
        let sum = 0
        filtroValores.forEach(f => {
            sum += parseFloat(f.valor)
        });
        let total = sum + consumo
        $("#parcial_painel").text(total.toFixed(2))
    }
}

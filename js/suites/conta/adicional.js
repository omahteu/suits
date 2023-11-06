import {RAIZ} from "../../raiz.js"

$(document).on('click', '[class="card"]', function () {
	let r1 = $(this)
	let r2 = $(r1[0].children[0])
	let r3 = $(r2[0].children[1])
	let suite = r3.text()
    setTimeout(() => {
		let quarto = $("#vq_painel").text()
		let valor = 0
		calculo(suite, quarto, valor)
	}, 500);
})

async function calculo(suite, quarto,  valor) {
	let offs = JSON.parse(sessionStorage.getItem('offs'))
	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`)
	const rs = await rq.json()
	if (rs["status"]) {
		let ficha = rs["dados"].filter(i => i.suite == suite)
		let aberto = offs.filter(z => z.suite == suite)
		ficha.forEach(el => {
			valor += parseFloat(el.valor)
		});
		let adicionado = parseFloat(valor) - parseFloat(aberto[0].valor)
		$("#vh_painel").text(parseFloat(adicionado).toFixed(2))
	}
}

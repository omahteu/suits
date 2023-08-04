import link from "../../../setup/index.js"

$(document).on('click', '[class="card"]', function () {
    let r1 = $(this)
    let r2 = $(r1[0].children[0])
    let r3 = $(r2[0].children[1])
    let suite = r3.text()
    $.get(link[5], e => {
		let filtroComanda = e.filter(i => i.suite == suite)
		let sum = 0
		filtroComanda.forEach(el => {
			sum += parseFloat(el.valor_total)
		})
		$("#consumo_painel").text(sum.toFixed(2))
	})
})

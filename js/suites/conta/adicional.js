import link from "../../setup/index.js"

$(document).on('click', '[class="card"]', function () {
	let r1 = $(this)
	let r2 = $(r1[0].children[0])
	let r3 = $(r2[0].children[1])
	let suite = r3.text()
    setTimeout(() => {
		let quarto = $("#vq_painel").text()
		let valor = 0
		$.get(link[36], e => {
			let ficha = e.filter(i => i.suite == suite)
            ficha.forEach(el => {
                valor += parseFloat(el.valor)
            });
            let adicionado = parseFloat(valor) - parseFloat(quarto)
            $("#vh_painel").text(parseFloat(adicionado).toFixed(2))
		})
	}, 500);
})

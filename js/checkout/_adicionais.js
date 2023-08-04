import link from "../setup/index.js"

export default function adicionais(suite, id_quarto, id_permanencia) {
	setTimeout(() => {
		let quarto = $(`#${id_quarto}`).text()
		let valor = 0
		$.get(link[36], e => {
			let ficha = e.filter(i => i.suite == suite)
			if (ficha.length == 0) {
				$(`#${id_permanencia}`).text("0.00")
			} else {
				ficha.forEach(el => {
					valor += parseFloat(el.valor)
				});
				let adicionado = parseFloat(valor) - parseFloat(quarto)
				$(`#${id_permanencia}`).text(parseFloat(adicionado).toFixed(2))
			}
		})
	}, 1000);
}

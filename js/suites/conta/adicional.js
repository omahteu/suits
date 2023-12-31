import {RAIZ} from "../../raiz.js"

// $(document).on('click', '[class="card"]', function () {
// 	let r1 = $(this)
// 	let r2 = $(r1[0].children[0])
// 	let r3 = $(r2[0].children[1])
// 	let suite = r3.text()
//     setTimeout(() => {
// 		calculo(suite)
// 	}, 500);
// })

export default async function calculoAdicional(suite) {
	let valor = 0
	let offs = JSON.parse(sessionStorage.getItem('offs'))
	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`)
	const rs = await rq.json()
	if (rs["status"]) {
		try {
			let ficha = rs["dados"].filter(i => i.suite == suite)

			let aberto = offs.filter(z => z.suite == suite)
			ficha.forEach(el => {
				valor += parseFloat(el.valor)
			});
			let adicionado = parseFloat(valor) - parseFloat(aberto[0].valor)

			$("#vh_painel").text(parseFloat(adicionado).toFixed(2))
		} catch (error) {
			console.log('e')
		}
	} else {
		console.log('e')
	}
}

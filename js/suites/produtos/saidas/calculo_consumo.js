import {RAIZ} from "../../../raiz.js"



// export default async function calculo(suite) {
// 	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
// 	const rs = await rq.json()
// 	if (rs["status"]) {
// 		let filtroComanda = rs["dados"].filter(i => i.suite == suite)
// 		let sum = 0
// 		filtroComanda.forEach(el => {
// 			sum += parseFloat(el.valor_total.replace(/[^\d.-]/g, ''))
// 		})
// 		$("#consumo_painel").text(sum.toFixed(2))
// 	}
// }

import link from "../setup/index.js"

export async function somaComanda(suite) {
	let total = 0
	const rq = await fetch(link[5])
	const rs = await rq.json()
	let ficha = rs.filter(i => i.suite == suite)
	ficha.forEach(el => {
		const valores = el.valor_total
		total += parseFloat(valores)
	})
	$("#valorItens").text(parseFloat(total).toFixed(2))
}

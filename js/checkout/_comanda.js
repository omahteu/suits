import link from "../setup/index.js"

export async function comanda(suite) {
	const rq = await fetch(link[5])
	const rs = await rq.json()
	let ficha = rs.filter(i => i.suite == suite)
	let nota = document.getElementById("comanda")
	nota.innerHTML = ""
	ficha.forEach(el => {
		let infos = [el.id, el.descricao, el.quantidade, el.valor_total, el.valor_unitario]
		nota.innerHTML += '<tr>' +
			`<td>${infos[1]}</td>` +
			`<td>${infos[2]}</td>` +
			`<td>${infos[4]}</td>` +
			`<td id="total">${infos[3]}</td>` +
			`<td><button type="button" id="removerProduto" value="${infos[0]}" class="btn btn-danger">Remover</button></td>` +
			'</tr>'
	})
	
}

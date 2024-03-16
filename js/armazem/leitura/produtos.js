// import link from "../../setup/index.js"
import {RAIZ} from "../../raiz.js"

export function leituraProdutos(){
	$.get(link[5], (retorno) => {
		var numero_quarto =  $("#quarto_painel").text()
		var prateleira = document.getElementById('listaProdutosComprados');
		prateleira.innerHTML = '';
		var dados = retorno.filter(l => l.suite == numero_quarto)
		dados.forEach( (resultado) => {
			var id = resultado.id
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valorTotal = resultado.valor_total
			prateleira.innerHTML += '<tr>'+
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										`<td>R$${valorUnitario}</td>`+
										`<td>R$${valorTotal}</td>`+
										`<td><button type="button" id="remocaoProduto" name="${id}" class="btn btn-danger">Remover</button></td>`+
									'</tr>';
		})
	})
}

export function leituraProdutosPlus(identificador){
	$.get(link[5], (retorno) => {
		var prateleira = document.getElementById('listaProdutosComprados');
		prateleira.innerHTML = '';
		try {
			var dados = retorno.filter(l => l.suite == identificador)
			dados.forEach( (resultado) => {
				var id = resultado.id
				var descricao = resultado.descricao
				var quantidade = resultado.quantidade
				var valorUnitario = resultado.valor_unitario
				var valorTotal = resultado.valor_total
				prateleira.innerHTML += '<tr>'+
											'<td>'+ descricao + '</td>' +
											'<td>'+ quantidade + '</td>' +
											`<td>R$${valorUnitario}</td>`+
											`<td>R$${valorTotal}</td>`+
											`<td><button type="button" id="remocaoProduto" name="${id}" class="btn btn-danger">Remover</button></td>`+
										'</tr>';
			})
		} catch (error) {
			sessionStorage.setItem("produtos.js", `[LOGS] | ${error}`)
		}
	})
}


export async function ll(suite = "0") {
	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
	const rs = await rq.json()
	if (rs["status"]) {
		var comanda = document.getElementById('listaProdutosComprados');
		comanda.innerHTML = '';
		try {
			var dados = rs["dados"].filter(l => l.suite == suite)
			dados.forEach( (i) => {
				var vt = String(i.valor_total)
				var vt2 = vt.match(/\D+|\d+/g)
				comanda.innerHTML += `
					<tr>
						<td>${i.descricao}</td>
						<td>${i.quantidade}</td>
						<td>${i.valor_unitario}</td>
						<td>R$${parseFloat(vt2[1]).toFixed(2)}</td>
						<td><button type="button" id="remocaoProduto" name="${i.id}" class="btn btn-danger">Remover</button></td>
					</tr>
				`
			})
		} catch (error) {
			sessionStorage.setItem("produtos.js", `[LOGS] | ${error}`)
		}
	} else {
		var comanda = document.getElementById('listaProdutosComprados');
		comanda.innerHTML = '';
	}
}

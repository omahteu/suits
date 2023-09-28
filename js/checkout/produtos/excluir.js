// import { ll } from "../../../armazem/leitura/produtos.js"
// import link from "../../../setup/index.js"
import apagar from "../../olivia/apaga.js"
import { RAIZ } from "../../raiz.js"

$(document).on("click", "#remocaoProduto", function () {
    let suite = localStorage.getItem('last')
    let id = $(this).attr("name")
    let motivo = prompt('Motivo da retirada do produto:')
    if (motivo == null) {
        alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
    } else if (motivo.length == 0) {
        alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
    } else {
        let dados = 'tabela=' + 'comanda' + '&coluna=' + 'id' + '&valor=' + id
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados)
        lli(suite)
    }
})

async function lli(suite) {
	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
	const rs = await rq.json()
	if (rs["status"]) {
		var comanda = document.getElementById('comanda');
		comanda.innerHTML = '';
		try {
			var dados = rs["dados"].filter(l => l.suite == suite)
			dados.forEach( (i) => {
				comanda.innerHTML += `
					<tr>
						<td>${i.descricao}</td>
						<td>${i.quantidade}</td>
						<td>${i.valor_unitario}</td>
						<td>${i.valor_total}</td>
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

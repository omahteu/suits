import make_url from "../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";

// PRECISA SER REFATORADO


export default function listaComanda(suite = "1") {
	const url = make_url("assets", "comanda.php");
	var comanda = document.getElementById('listaProdutosComprados');
    

    fazerRequisicaoAjax(url, "GET", null, function(response) {
        const data = JSON.parse(response)
        
        if (data.status) {
			comanda.innerHTML = ''

			try {
				var dados = data.dados.filter(l => l.suite == suite)

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
				console.log(error)
			}
        } else {
            comanda.innerHTML = '';
        }
    }, function(error) {
        console.log(error)
    })
}

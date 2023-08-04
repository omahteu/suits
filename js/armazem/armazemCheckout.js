import { hora_atual } from "../geradores/hora.js"
import link from "../setup/index.js"
import apagar from "../olivia/apaga.js"
import salvar from "../olivia/salva.js"

$(document).on("click", "#adicionar_produto", function(){
	registroProduto()
})

$(document).on("click", "#removerProduto", function(){
	var id = $(this).val()
	removeProduto(id)
	mostraProduto()
})

function registroProduto(){
	var descricao = $("#descricao_produto").val()
    var quantidade = $("#quantidade_produto").val()
	var valorTotal = $("#total_produto").val()
    var quarto =  localStorage.getItem("last")
    var valorUnitario = $("#valor_unitario_produto").val()
	var hora = hora_atual()
	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
		datahora: hora,
		valor_quarto: "0"
	}
	salvar(link[5], produto)
	location.reload()
	document.getElementById('produtos_checkout').reset();
}

function removeProduto(id){
	var motivo = prompt('Motivo da retirada do produto:')
	if (motivo == null){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else if (motivo.length == 0){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else {
		let url = `${link[5]}${id}/`
		apagar(url)
	}
}

function mostraProduto(){
	$.get(link[5], (retorno) => {
		var nQuarto =  localStorage.getItem("last")
		var prateleira = document.getElementById('comanda');
		prateleira.innerHTML = '';
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)
		dados.forEach( (resultado) => {
			var id = resultado.id
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valorTotal = resultado.valor_total
			prateleira.innerHTML += '<tr>'+
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										'<td>'+ valorUnitario + '</td>' +
										'<td>'+ valorTotal + '</td>' +
										`<td><button type="button" id="removerProduto" value="${id}" class="btn btn-danger">Remover</button></td>`+
									'</tr>';
		})
	})
}

// import { hora_atual } from "../geradores/hora.js"
// import link from "../setup/index.js"
import apagar from "../olivia/apaga.js"
// import salvar from "../olivia/salva.js"
import {RAIZ} from "../raiz.js"
import { ll } from "./leitura/produtos.js"
import receber from "../quartos/auxiliares/funcao4.js"

$(document).on("click", "#adicionar_produto", function(){
	registroProduto()
})

$(document).on("click", "#removerProduto", function(){
	var id = $(this).val()
	removeProduto(id)
})

function registroProduto(){
	// var descricao = $("#descricao_produto").val()
    // var quantidade = $("#quantidade_produto").val()
	// var valorTotal = $("#total_produto").val()
    // var quarto =  localStorage.getItem("last")
    // var valorUnitario = $("#valor_unitario_produto").val()
	// var hora = hora_atual()
	// var produto = {
	// 	quarto: quarto,
	// 	descricao: descricao,
	// 	quantidade: quantidade,
	// 	valor_total: valorTotal,
	// 	valor_unitario: valorUnitario,
	// 	datahora: hora,
	// 	valor_quarto: "0"
	// }
	// salvar(link[5], produto)
	// document.getElementById('produtos_checkout').reset()

	let infos = receber("offs")
	let suite = localStorage.getItem('last')
	let busca = infos.filter(o => o.suite == suite)
	var tipos = ['locado', 'pernoite', 'aguardando']
	try {
		let tipo = busca[0].tipo
		if(tipos.includes(tipo)){
			setTimeout(() => {
				let dadosphp = $("#produtos_checkout").serialize()
				console.log(dadosphp)
				var xhr = new XMLHttpRequest();		
				xhr.open("POST", `http://${RAIZ}/suits/php/suites/comanda.php`, true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4 && xhr.status === 200) {
						alert("Produto adicionado!")
						document.getElementById("produtos_checkout").reset()
						ll(suite)
					}
				};
				xhr.send(dadosphp)
			}, 1500);
		}
	} catch (error) {
		alert('Selecione um Quarto!')
	}
}

function removeProduto(id){
	var motivo = prompt('Motivo da retirada do produto:')
	let suite = localStorage.getItem('last')
	if (motivo == null){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else if (motivo.length == 0){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else {
		let dados = 'tabela=' + 'comanda' + '&coluna=' + 'id' + '&valor=' + id
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados)
		ll(suite)
	}
}

import { registroProdutos } from "../../../armazem/registros/produtos.js"
import receber from "../../../quartos/auxiliares/funcao4.js"
import {RAIZ} from "../../../raiz.js"

$(document).on("click", "#registrar_produto", function() {
	let infos = receber("offs")
	let suite = $("#quarto_painel").text()
	let busca = infos.filter(o => o.suite == suite)
	var tipos = ['locado', 'pernoite']
	try {
		let tipo = busca[0].tipo
		if(tipos.includes(tipo)){
			registroProdutos()
			setTimeout(() => {
				let dadosphp = $("#formCadastros").serialize()
				$.ajax({
					type: 'POST',
					dataType: 'json',
					url: `http://${RAIZ}/suits/php/suites/comanda.php`,
					async: true,
					data: dadosphp
				});
			}, 1500);
		}
	} catch (error) {
		alert('Selecione um Quarto!')
	}
})
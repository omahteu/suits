// import { registroProdutos } from "../../../armazem/registros/produtos.js"
import receber from "../../../quartos/auxiliares/funcao4.js"
import {RAIZ} from "../../../raiz.js"
import { ll } from "../../../armazem/leitura/produtos.js"

$(document).on("click", "#registrar_produto", function() {
	let infos = receber("offs")
	let suite = $("#quarto_painel").text()
	let busca = infos.filter(o => o.suite == suite)
	var tipos = ['locado', 'pernoite']
	try {
		let tipo = busca[0].tipo
		if(tipos.includes(tipo)){
			setTimeout(() => {
				let dadosphp = $("#formCadastros").serialize()
				var xhr = new XMLHttpRequest();		
				xhr.open("POST", `http://${RAIZ}/suits/php/suites/comanda.php`, true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4 && xhr.status === 200) {
						alert("Produto adicionado!")
						document.getElementById("formCadastros").reset()
						ll(suite)
					}
				};
				xhr.send(dadosphp)
			}, 1500);
		}
	} catch (error) {
		alert('Selecione um Quarto!')
	}
})

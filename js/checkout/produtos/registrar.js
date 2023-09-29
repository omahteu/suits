// import { registroProdutos } from "../../../armazem/registros/produtos.js"
import receber from "../../quartos/auxiliares/funcao4.js"
import {RAIZ} from "../../raiz.js"
import { ll } from "../../armazem/leitura/produtos.js"
import {hora_atual_segundos} from "../../geradores/hora.js"
import {somaComanda} from "../_somaComanda.js"

$(document).on("click", "#registrar_produto", function() {
	let infos = receber("offs")
	let suite = localStorage.getItem('last')
	let busca = infos.filter(o => o.suite == suite)
	var tipos = ['locado', 'pernoite', 'aguardando']
	try {
		let tipo = busca[0].tipo
		if(tipos.includes(tipo)){
			setTimeout(() => {
				let dados = 'suite=' + suite + '&descricao=' + $("#descricao").val() + '&quantidade=' + $("#quantidade").val() + '&valor_total=' + $("#valor_total").val() + '&valor_unitario=' + $("#valor_unitario").val() + '&hora=' + hora_atual_segundos() + '&valor_suite=' + '0'
				var xhr = new XMLHttpRequest();		
				xhr.open("POST", `http://${RAIZ}/suits/php/suites/comandaC.php`, true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4 && xhr.status === 200) {
						alert("Produto adicionado!")
						document.getElementById("produtos_checkout").reset()
						ll(suite)
						somaComanda(suite)
					}
				};
				xhr.send(dados)
			}, 1000);
		}
	} catch (error) {
		alert('Selecione um Quarto!')
	}
})

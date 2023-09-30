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
						calculo(suite)
					}
				};
				xhr.send(dadosphp)
			}, 1500);
		}
	} catch (error) {
		alert('Selecione um Quarto!')
	}
})

async function calculo(suite) {
	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
	const rs = await rq.json()
	if (rs["status"]) {
		let filtroComanda = rs["dados"].filter(i => i.suite == suite)
		let sum = 0
		filtroComanda.forEach(el => {
			sum += parseFloat(el.valor_total.replace(/[^\d.-]/g, ''))
		})
		$("#consumo_painel").text(sum.toFixed(2))
		console.log(filtroComanda)
	}
}

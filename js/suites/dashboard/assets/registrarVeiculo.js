import receber from "../../../quartos/auxiliares/funcao4.js"
import {RAIZ} from "../../../raiz.js"
import { vv } from "../../../armazem/leitura/veiculos.js"

// mover a garagem para outra aba no painel e criar uma pasta apenas para o pátiow

export default function veiculo(suite) {
	let infos = receber("offs")
	let busca = infos.filter(o => o.suite == suite)
	var tipos = ['locado', 'pernoite']
	try {
		let tipo = busca[0].tipo
		if(tipos.includes(tipo)){
			setTimeout(() => {
				let dadosphp = $("#formCadastros").serialize()
				var xhr = new XMLHttpRequest();		
				xhr.open("POST", `http://${RAIZ}/suits/php/suites/patio.php`, true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4 && xhr.status === 200) {
						alert("Veículo Registrado!")
						document.getElementById("formCadastros").reset()
						vv(suite)
					}
				};
				xhr.send(dadosphp);
			}, 1500);
		}
	} catch (error) {
		alert('Selecione um Quarto!')
	}
}

import { registroVeiculos } from "../../../armazem/registros/veiculos.js"
import receber from "../../../quartos/auxiliares/funcao4.js"

$(document).on("click", "#registrar_veiculo", function() {
	let infos = receber("offs")
	let suite = $("#quarto_painel").text()
	let busca = infos.filter(o => o.suite == suite)
	var tipos = ['locado', 'pernoite']
	try {
		let tipo = busca[0].tipo
		if(tipos.includes(tipo)){
			registroVeiculos()
			setTimeout(() => {
				let dadosphp = $("#formCadastros").serialize()
				$.ajax({
					type: 'POST',
					dataType: 'json',
					url: "http://localhost/Suites/php/suites/patio.php",
					async: true,
					data: dadosphp
				});
			}, 1500);
		}
	} catch (error) {
		alert('Selecione um Quarto!')
	}
})
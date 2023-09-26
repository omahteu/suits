import link from "../../setup/index.js"
import { RAIZ } from "../../raiz.js"

export async function leituraVeiculos(){

	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/patio.php`)
	const rs = rq.json()
	if (rs["status"]) {
		var numero_quarto =  $("#quarto_painel").text()
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		var dados = rs["dados"].filter(l => l.suite == numero_quarto)
		dados.forEach( (e) => {
			var id = e.id
			var modelo = e.modelo
			var placa = e.placa
			patio.innerHTML += '<tr>'+
									'<td>'+ placa + '</td>' +
									'<td>'+ modelo + '</td>' +
									`<td><button type="button" id="remocaoVeiculo" name="${id}" class="btn btn-danger">Remover</button></td>`+
								'</tr>';
		})
	}



	// $.get(link[15], (retorno) => {
	// 	var numero_quarto =  $("#quarto_painel").text()
	// 	var patio = document.getElementById('listaveiculosguardados');
	// 	patio.innerHTML = '';
	// 	var dados = retorno.filter(l => l.suite == numero_quarto)
	// 	dados.forEach( (e) => {
	// 		var id = e.id
	// 		var modelo = e.modelo
	// 		var placa = e.placa
	// 		patio.innerHTML += '<tr>'+
	// 								'<td>'+ placa + '</td>' +
	// 								'<td>'+ modelo + '</td>' +
	// 								`<td><button type="button" id="remocaoVeiculo" name="${id}" class="btn btn-danger">Remover</button></td>`+
	// 							'</tr>';
	// 	})
	// })
}

export function leituraVeiculosPlus(identificador){
	$.get(link[15], (retorno) => {
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		try {
			var dados = retorno.filter(l => l.suite == identificador)
			dados.forEach( (e) => {
				var id = e.id
				var modelo = e.modelo
				var placa = e.placa
				patio.innerHTML += '<tr>'+
										'<td>'+ placa + '</td>' +
										'<td>'+ modelo + '</td>' +
										`<td><button type="button" id="remocaoVeiculo" name="${id}" class="btn btn-danger">Remover</button></td>`+
									'</tr>';
			})
		} catch (error) {
			sessionStorage.setItem("veiculos.js", `[LOGS] | ${error}`)
		}
	})
}

export async function vv(suite = "0") {
	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/patio.php`)
	const rs = await rq.json()
	if (rs["status"]) {
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		try {
			var dados = rs["dados"].filter(l => l.suite == suite)
			console.log(dados)
			dados.forEach( (i) => {
				patio.innerHTML += `
					<tr>
						<td>${i.placa}</td>
						<td>${i.modelo}</td>
						<td><button type="button" id="remocaoVeiculo" name="${i.id}" class="btn btn-danger">Remover</button></td>
					</tr>
				`
			})
		} catch (error) {
			sessionStorage.setItem("produtos.js", `[LOGS] | ${error}`)
		}
	} else {
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
	}
}


import link from "../../setup/index.js"

export function leituraVeiculos(){
	$.get(link[15], (retorno) => {
		var numero_quarto =  $("#quarto_painel").text()
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		var dados = retorno.filter(l => l.suite == numero_quarto)
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
	})
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

export function vv(suite = "0") {
	$.get(link[15], e => {
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		try {
			var dados = e.filter(l => l.suite == suite)
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
	})
}


import { RAIZ } from "../../raiz.js"

export async function vv(suite = "0") {
	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/patio.php`)
	const rs = await rq.json()
	if (rs["status"]) {
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		try {
			var dados = rs["dados"].filter(l => l.suite == suite)
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

import { RAIZ } from "../../raiz.js";

$(document).on("click", "#listap", function () {
    var suite = localStorage.getItem("last");
    comanda(suite);
});

async function comanda(suite) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`);
    const rs = await rq.json();
    if (rs["status"]) {
        var comanda = document.getElementById("comanda");
        comanda.innerHTML = "";
        try {
            var dados = rs["dados"].filter((l) => l.suite == suite);
            dados.forEach((i) => {
                comanda.innerHTML += `
					<tr>
						<td>${i.descricao}</td>
						<td>${i.quantidade}</td>
						<td>${i.valor_unitario}</td>
						<td>${i.valor_total}</td>
						<td><button type="button" id="remocaoProduto" name="${i.id}" class="btn btn-danger">Remover</button></td>
					</tr>
				`;
            });
        } catch (error) {
            sessionStorage.setItem("produtos.js", `[LOGS] | ${error}`);
        }
    } else {
        var comanda = document.getElementById("listaProdutosComprados");
        comanda.innerHTML = "";
    }
}

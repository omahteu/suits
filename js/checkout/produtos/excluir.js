import apagar from "../../olivia/apaga.js";
import { RAIZ } from "../../raiz.js";
import { somaComanda } from "../_somaComanda.js";
import { subtotal } from "../_subtotal.js";

$(document).on("click", "#remocaoProduto", function () {
    let suite = localStorage.getItem("last");
    let id = $(this).attr("name");
    let motivo = prompt("Motivo da retirada do produto:");
    if (motivo == null) {
        alert(
            "Produto não excluido!\nÉ necessário o motivo da exclusão do produto!"
        );
    } else if (motivo.length == 0) {
        alert(
            "Produto não excluido!\nÉ necessário o motivo da exclusão do produto!"
        );
    } else {
        let dados = "tabela=" + "comanda" + "&coluna=" + "id" + "&valor=" + id;
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados);
        alert("Produto excluído com sucesso!")
        evb(suite)
        somaComanda(suite)
        subtotal()
        setTimeout(() => {
            total()
        }, 1500);
    }
});

async function evb(suite) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`);
    const rs = await rq.json();
    if (rs["status"]) {
        var comanda = document.getElementById("comanda");
        comanda.innerHTML = "";
        try {
            var dados = rs["dados"].filter(o => o.suite == suite);
            console.log(dados)
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
        var comandaz = document.getElementById("comanda");
        comandaz.innerHTML = "";
    }
}

function total() {
    let forma = $("#modo_pagamento :selected").val();
    if (forma == "dinheiro") {
        let desconto = $("#valorDesconto").text();
        let sub = parseFloat($("#valor_subtotal").text());
        if (desconto.charAt(0) == "R") {
            let total = sub - parseFloat(desconto.slice(3));
            $("#totalGeral").text(total.toFixed(2));
            $("#confirma_parcelas").attr("disabled", "true");
            $("#confirma_parcelas").css("background", "black");
        } else if (desconto.charAt(0) == "0") {
            $("#totalGeral").text(sub.toFixed(2));
            $("#confirma_parcelas").attr("disabled", "true");
            $("#confirma_parcelas").css("background", "black");
        } else {
            let decimal = parseFloat(desconto.slice(0, -1)) / 100;
            let descontando = sub * decimal;
            let valor = sub - descontando;
            $("#totalGeral").text(valor.toFixed(2));
            $("#confirma_parcelas").attr("disabled", "true");
            $("#confirma_parcelas").css("background", "black");
        }
    }
}

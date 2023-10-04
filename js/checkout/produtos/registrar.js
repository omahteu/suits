// import { registroProdutos } from "../../../armazem/registros/produtos.js"
// import receber from "../../quartos/auxiliares/funcao4.js"
import { RAIZ } from "../../raiz.js";
// import { ll } from "../../armazem/leitura/produtos.js"
import { hora_atual_segundos } from "../../geradores/hora.js";
import { somaComanda } from "../_somaComanda.js";
// import { total } from "../_total.js";
import { subtotal } from "../_subtotal.js";

$(document).on("click", "#registrar_produto", function () {
    let suite = localStorage.getItem("last");
    try {
        setTimeout(() => {
            let dados =
                "suite=" +
                suite +
                "&descricao=" +
                $("#descricao").val() +
                "&quantidade=" +
                $("#quantidade").val() +
                "&valor_total=" +
                $("#valor_total").val() +
                "&valor_unitario=" +
                $("#valor_unitario").val() +
                "&hora=" +
                hora_atual_segundos() +
                "&valor_suite=" +
                "0";
            var xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                `http://${RAIZ}/suits/php/suites/comandaC.php`,
                true
            );
            xhr.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert("Produto adicionado!");
                    document.getElementById("produtos_checkout").reset();
                    hgf(suite);
                    somaComanda(suite);
                    subtotal()
                    setTimeout(() => {
                        total()
                    }, 1500);
                }
            };
            xhr.send(dados);
        }, 1000);
    } catch (error) {
        alert("Selecione um Quarto!");
    }
});

export async function hgf(suite = "0") {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`);
    const rs = await rq.json();
    if (rs["status"]) {
        var comanda = document.getElementById("comanda");
        comanda.innerHTML = "";
        try {
            var dados = rs["dados"].filter((l) => l.suite == suite);
            dados.forEach((i) => {
                var vt = String(i.valor_total);
                var vt2 = vt.match(/\D+|\d+/g);
                comanda.innerHTML += `
					<tr>
						<td>${i.descricao}</td>
						<td>${i.quantidade}</td>
						<td>${i.valor_unitario}</td>
						<td>R$${parseFloat(vt2[1]).toFixed(2)}</td>
						<td><button type="button" id="remocaoProduto" name="${i.id
                    }" class="btn btn-danger">Remover</button></td>
					</tr>
				`;
            });
        } catch (error) {
            sessionStorage.setItem("produtos.js", `[LOGS] | ${error}`);
        }
    } else {
        var comanda = document.getElementById("comanda");
        comanda.innerHTML = "";
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


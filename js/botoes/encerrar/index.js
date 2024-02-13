import estoque from "./produto.js";
import ocupacao from "./ocupacao.js";
import limpando from "./limpar.js";
import alterar from "../../olivia/altera.js";
import { RAIZ } from "../../raiz.js";
// import desligar_luz from "../../automacao/desligar.js";
// import apagar from "../../olivia/apaga.js";
import fechar_cofre from "../../limpar/cofre.js";
import gerarCodigo from "../../tools/codigo.js"
import pagamento from "../../checkout/assets/registro_ocupacao_interno.js"

var commands = {
    1: "#encerrar",
    2: "#selecionaCamareira :selected",
    3: "#modo_pagamento :selected",
    4: "#numero_parcelas"
}

var variables = {
    1: "Camareira",
    2: "Crédito Mastercard - 4%",
    3: "0",
    4: "last"
}

var alerts = {
    1: "Selecione o Número de Parcelas",
    2: "Selecione uma Camareira"
}

$(document).on("click", commands[1], function () {
    var codigo_comanda = gerarCodigo()
    if ($(commands[2]).text().trim() != variables[1]) {
        if ($(commands[3]).text() == variables[2] && $(commands[4]).val() == variables[3]) {
            alert(alerts[1])
        } else {
            var suite = localStorage.getItem(variables[4])
            var dados = "suite=" + suite + "&tipo=" + "aguardando";
            alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados)
            setTimeout(() => { pagamento(codigo_comanda, suite); }, 100)
            setTimeout(() => { estoque(suite); }, 200)
            setTimeout(() => { ocupacao(); }, 300)

            // setTimeout(() => {
            //     desligar_luz(suite)
            //     var vai = "tabela=" + "acoes" + "&coluna=" + "suite" + "&valor=" + suite
            //     apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai)
            // }, 400);

            setTimeout(() => { limpando(); }, 500)
            setTimeout(() => { fechar_cofre(suite) }, 600)
            setTimeout(() => { window.close(); }, 1500)
        }
    } else {
        alert(alerts[2])
    }
})

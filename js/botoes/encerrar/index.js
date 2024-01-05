import registrando from "./produto.js";
import ocupacao from "./ocupacao.js";
import limpando from "./limpar.js";
import alterar from "../../olivia/altera.js";
import { RAIZ } from "../../raiz.js";
import desligar_luz from "../../automacao/desligar.js";
import apagar from "../../olivia/apaga.js";
import fechar_cofre from "../../limpar/cofre.js";
import gerarCodigo from "../../tools/codigo.js"
import registrar_pagamento from "../../checkout/assets/registro_ocupacao_interno.js"

$(document).on("click", "#encerrar", function () {
    var codigo_comanda = gerarCodigo()
    if (
        $("#selecionaCamareira :selected").text().trim() != "Camareira"
    ) {
        if (
            $("#modo_pagamento :selected").text() == "Crédito Mastercard - 4%" &&
            $("#numero_parcelas").val() == '0'
        ) {
            alert("Selecione o Número de Parcelas")
        } else {
            var suite = localStorage.getItem("last")

            var dados = "suite=" + suite + "&tipo=" + "aguardando";

            alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados)

            setTimeout(() => { registrar_pagamento(codigo_comanda, suite); }, 100)

            setTimeout(() => { registrando(suite); }, 200)

            setTimeout(() => { ocupacao(); }, 300)

            // setTimeout(() => {
            //     desligar_luz(suite)
            //     var vai = "tabela=" + "acoes" + "&coluna=" + "suite" + "&valor=" + suite
            //     apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai)
            // }, 400);

            // para para ca tbem
            setTimeout(() => { limpando(); }, 500)

            setTimeout(() => { fechar_cofre(suite) }, 600)

            setTimeout(() => { window.close(); }, 1500)
        }
    } else {
        alert("Selecione uma Camareira")
    }
});

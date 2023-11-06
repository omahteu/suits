import registrar_pagamento from "./pagamento.js";
import registrando from "./produto.js";
import ocupacao from "./ocupacao.js";
import limpando from "./limpar.js";
// import notas from "../../checkout/nota.js"
import alterar from "../../olivia/altera.js";
import { RAIZ } from "../../raiz.js";
import desligar_luz from "../../automacao/desligar.js";
import apagar from "../../olivia/apaga.js";
// import salvar from "../../olivia/salva.js";
// import { hora_atual_segundos } from "../../geradores/hora.js";

$(document).on("click", "#encerrar", function () {
    //notas()
    var cm = $("#selecionaCamareira :selected").text();
    if (cm.trim() != "Camareira") {
        // impressao()
        let metodo_pagamento = $("#modo_pagamento :selected").text()
        let parcelas = $("#numero_parcelas").val()
    
        if (metodo_pagamento == "Crédito Mastercard - 4%" && parcelas == '0') {
            alert("Selecione o Número de Parcelas")
        } else {
            var suite = localStorage.getItem("last");
            var dados = "suite=" + suite + "&tipo=" + "aguardando";
            alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados);
            setTimeout(() => {registrar_pagamento();}, 300);
            setTimeout(() => {registrando();}, 500);
            setTimeout(() => {ocupacao();}, 800);
            setTimeout(() => {
                desligar_luz(suite);
                var vai = "tabela=" + "acoes" + "&coluna=" + "suite" + "&valor=" + suite;
                apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai);
            }, 650);
            setTimeout(() => {limpando();}, 900);
            setTimeout(() => {window.close();}, 1500);
        }

    } else {
        alert("Selecione uma Camareira");
    }
});


// async function impressao() {
//     const rq = await fetch(`http://${RAIZ}/suits/php/impressoras/show/emuso.php`)
//     const rs = await rq.json()
//     if (rs['dados']) {
//         if (rs['dados'][0].parcial == 'n') {
//             let base = JSON.parse(sessionStorage.getItem('offs'))
//             let suite = localStorage.getItem('last')
//             let fsuits = base.filter(z => z.suite == suite)
//             let inicio = fsuits[0].hora
//             let fim = hora_atual_segundos()
//             let tempo = $("#tempoPermanencia").text()
//             let vsuite = localStorage.getItem('vs')
//             let consumo = localStorage.getItem('vc')
//             let add = localStorage.getItem('va')
//             let total = $("#totalGeral").text()
//             let receber = localStorage.getItem('troco')
//             let dados = 'suite=' + suite + '&inicio=' + inicio + '&fim=' + fim + '&tempo=' + tempo + '&tipo=' + 'Locacao' + '&vsuite=' + vsuite + '&vconsumo=' + parseFloat(consumo).toFixed(2) + '&vadd=' + parseFloat(add).toFixed(2) + '&total=' + total + '&receber=' + parseFloat(receber).toFixed(2)
//             salvar(`http://${RAIZ}/suits/php/suites/impressao.php`, dados)
//         }
//     }
// }

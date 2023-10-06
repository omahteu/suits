import {fimMenu} from "../setup/menu.js"

// import registraLimiteTroca from "../suites/tarefas/registros/locacao.js"

import ligar_luz from "../automacao/ligar.js"

import salvar from "../olivia/salva.js"
// import link from "../setup/index.js"
import { play } from "../setup/start_relogios.js"

import {index} from "../tags/particao.js"
import locado from "../tags/locacao.js"

import { limited } from "../suites/tarefas/registros/limites.js"

import { RAIZ } from "../raiz.js"
import { ll } from "../armazem/leitura/produtos.js"

$(document).on("click", ".locado", function () {

    const suite = $('#quarto_painel').text()

    if (confirm(`Iniciar a Suíte ${suite}?`) == true) {

        setTimeout(() => { locado(suite) }, 1)

        setTimeout(() => {
            ligar_luz(suite)
            let vai = 'suite=' + suite + '&situacao=' + 'on'
            salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai)
        }, 50);

        setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limitemanutencao.php`, `trocaTempo`, suite, "a", "troca") }, 150)

        setTimeout(() => { index(suite, "locado") }, 300)

        setTimeout(() => { fimMenu() }, 400)

        setTimeout(() => { play[suite](suite, "0", "0", "0") }, 500)

        setTimeout(() => {
            ll(suite)
            calculo(suite)
        }, 1000);
    }
})

function calculo(suite) {
    let box = JSON.parse(sessionStorage.getItem('offs'))
    let fil = box.filter(x => x.suite == suite)
    $("#vq_painel").text(parseFloat(fil[0].valor).toFixed(2))
    $("#parcial_painel").text(parseFloat(fil[0].valor).toFixed(2))
}

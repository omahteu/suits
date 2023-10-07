 import { play } from "../setup/start_relogios.js"

import revisao from "../tags/revisao.js"
import {index} from "../tags/particao.js"

import {fimMenu} from "../setup/menu.js"

import { limited } from "../suites/tarefas/registros/limites.js"

import { RAIZ } from "../raiz.js"

import ligar_luz from "../automacao/ligar.js"

import salvar from "../olivia/salva.js"


$(document).on("click", ".revisao", function () {
    const suite = $('#quarto_painel').text()
    const motivo = prompt("Motivo da Revisão")

    localStorage.setItem("motivo_revisao", motivo)

    if (motivo != null) {

        if (motivo.length > 0) {

            setTimeout(() => { revisao(suite) }, 1)

            setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limitemanutencao.php`, `manutencaoTempo`, suite, "l", "luz") }, 200)
    
            setTimeout(() => { index(suite, "revisao") }, 300)
    
            setTimeout(() => { fimMenu() }, 400)

            setTimeout(() => { play[suite](suite, "0", "0", "0") }, 500)
    
            setTimeout(() => {
                ligar_luz(suite)
                let vai = 'suite=' + suite + '&situacao=' + 'on'
                salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai)
            }, 100);

        } else {
            alert("Necessário informar o motivo da manutenção")
        }


    } else {
        alert("Necessário informar o motivo da manutenção")
    }
})

 import { play } from "../setup/start_relogios.js"

import revisao from "../tags/revisao.js"
import {index} from "../tags/particao.js"

import {fimMenu} from "../setup/menu.js"
// import {registraLimiteManutencao} from "../suites/tarefas/registros/manutencao.js"

// import { limited } from "../suites/tarefas/registros/limites.js"

import { RAIZ } from "../raiz.js"


$(document).on("click", ".revisao", function () {
    const suite = $('#quarto_painel').text()
    const motivo = prompt("Motivo da Manutenção")

    localStorage.setItem("motivo", motivo)

    if (motivo != null) {

        if (motivo.length > 0) {

            setTimeout(() => { manutencao(suite) }, 1)

            // setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limitemanutencao.php`, `manutencaoTempo`, suite, "l", "luz") }, 200)
    
            setTimeout(() => { index(suite, "revisao") }, 300)
    
            setTimeout(() => { fimMenu() }, 400)

            setTimeout(() => { play[suite](suite, "0", "0", "0") }, 500)
    
            // setTimeout(() => {
            //     localStorage.setItem("botao", "desligado")
            //     localStorage.setItem("luz", "desligado")
            // }, 400)

        } else {
            alert("Necessário informar o motivo da manutenção")
        }


    } else {
        alert("Necessário informar o motivo da manutenção")
    }
})

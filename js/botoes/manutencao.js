import { play } from "../setup/start_relogios.js"
import manutencao from "../tags/manutencao.js"
import { index } from "../tags/particao.js"
import { fimMenu } from "../setup/menu.js"
// import {limited} from "../suites/tarefas/registros/limites.js"
// import {RAIZ} from "../raiz.js"
import registraMotivoExclusao from "../suites/operacao/remocao.js"
import salvar from "../olivia/salva.js"
import { RAIZ } from "../raiz.js"


$(document).on("click", ".manutencao", function () {
    const suite = $('#quarto_painel').text()
    const motivo = prompt("Motivo da Manutenção")
    if (motivo != null) {
        if (motivo.length > 0) {
            localStorage.setItem(`manu${suite}`, "sim")
            registraMotivoExclusao("Manutenção", motivo)
            setTimeout(() => { manutencao(suite) }, 100)
            // setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limitemanutencao.php`, `manutencaoTempo`, suite, "l", "luz") }, 200)
            setTimeout(() => {
                let vai = 'suite=' + suite + '&situacao=' + 'off'
                salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai)
            }, 50);
            setTimeout(() => { index(suite, "manutencao") }, 300)
            setTimeout(() => { fimMenu() }, 400)
            setTimeout(() => { play[suite](suite, "0", "0", "0") }, 500)
        } else {
            alert("Necessário informar o motivo da manutenção")
        }
    } else {
        alert("Necessário informar o motivo da manutenção")
    }
})

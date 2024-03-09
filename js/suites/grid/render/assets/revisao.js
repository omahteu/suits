import { play } from "../../../../setup/start_relogios.js"
import revisao from "../../../../tags/revisao.js"
import { index } from "../../../../tags/particao.js"
import { fimMenu } from "../../../../setup/menu.js"
import { limited } from "../../../../suites/tarefas/registros/limites.js"
import { RAIZ } from "../../../../raiz.js"
import ligar_luz from "../../../../automacao/ligar.js"
import salvar from "../../../../olivia/salva.js"
import registraMotivoExclusao from "../../../../suites/operacao/remocao.js"


export default function startRevisao() {
    const suite = $('#quarto_painel').text()
    const motivo = prompt("Motivo da Revisão")
    if (motivo != null) {
        if (motivo.length > 0) {
            registraMotivoExclusao("Revisão", motivo)
            setTimeout(() => { revisao(suite) }, 100)
            setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limiteRevisao.php`, `revisaoTempo`, suite, "r", "revisao") }, 200)
            setTimeout(() => { index(suite, "revisao") }, 300)
            setTimeout(() => { fimMenu() }, 400)
            setTimeout(() => { play[suite](suite, "0", "0", "0") }, 500)
            setTimeout(() => {
                ligar_luz(suite)
                let vai = 'suite=' + suite + '&situacao=' + 'on'
                salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai)
            }, 600);
        } else {
            alert("Necessário informar o motivo da revisão")
        }
    } else {
        alert("Necessário informar o motivo da revisão")
    }
}

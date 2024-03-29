import ligar_luz from "../../../../automacao/ligar.js"
// import { play } from "../../../../setup/start_relogios.js"
import faxina from "../../../../tags/faxina.js"
import { index } from "../../../../tags/particao.js"
import { fimMenu } from "../../../../setup/menu.js"
import { limited } from "../../../../suites/tarefas/registros/limites.js"
import { RAIZ } from "../../../../raiz.js"
import salvar from "../../../../olivia/salva.js"
import { inicia } from "../../../../contadores/relogio.js"

export default function startFaxina() {
    const suite = $('#quarto_painel').text()
    if (confirm(`Iniciar Faxina na Suíte ${suite}?`) == true) {
        setTimeout(() => { faxina(suite) }, 1)
        setTimeout(() => {
            ligar_luz(suite)
            let vai = 'suite=' + suite + '&situacao=' + 'on'
            salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai)
        }, 100);
        setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limitemanutencao.php`, `faxinaTempo`, suite, "f", "faxina") }, 200)
        setTimeout(() => { index(suite, "faxina") }, 300)
        setTimeout(() => { fimMenu() }, 400)
        // setTimeout(() => { play[suite](suite, "0", "0", "0") }, 500)
        setTimeout(() => { inicia(suite, "0", "0", "0") }, 500)
    }
}

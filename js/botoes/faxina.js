import ligar_luz from "../automacao/ligar.js"
import { play } from "../setup/start_relogios.js"
import faxina from "../tags/faxina.js"
import { index } from "../tags/particao.js"
import { fimMenu } from "../setup/menu.js"
import { limited } from "../suites/tarefas/registros/limites.js"
import { RAIZ } from "../raiz.js"
import salvar from "../olivia/salva.js"

$(document).on("click", ".faxina", function () {
    const suite = $('#quarto_painel').text()
    if (confirm(`Iniciar Faxina na Suíte ${suite}?`) == true) {
        setTimeout(() => { faxina(suite) }, 1)
        setTimeout(() => {
            ligar_luz(suite)
            let vai = 'suite=' + suite + '&situacao=' + 'on'
            salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai)
        }, 100);
        setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limitemanutencao.php`, `faxinaTempo`, suite, "b", "faxina") }, 200)
        setTimeout(() => { index(suite, "faxina") }, 300)
        setTimeout(() => { fimMenu() }, 400)
        setTimeout(() => { play[suite](suite, "0", "0", "0") }, 500)
    }
})

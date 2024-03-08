import { fimMenu } from "../setup/menu.js"
import ligar_luz from "../automacao/ligar.js"
import salvar from "../olivia/salva.js"
import { play } from "../setup/start_relogios.js"
import { index } from "../tags/particao.js"
import locado from "../tags/locacao.js"
import { limited } from "../suites/tarefas/registros/limites.js"
import { RAIZ } from "../raiz.js"

$(document).on("click", ".locado", function () {
    const suite = $('#quarto_painel').text()
    if (confirm(`Iniciar a Suíte ${suite}?`) == true) {
        setTimeout(() => { locado(suite) }, 1)
        setTimeout(() => {
            ligar_luz(suite)
            let vai = 'suite=' + suite + '&situacao=' + 'on'
            salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai)
        }, 50);
        setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limitemanutencao.php`, `trocaTempo`, suite, "t", "troca") }, 150)
        setTimeout(() => { index(suite, "locado") }, 300)
        setTimeout(() => { fimMenu() }, 400)
        setTimeout(() => { play[suite](suite, "0", "0", "0") }, 500)
    }
})

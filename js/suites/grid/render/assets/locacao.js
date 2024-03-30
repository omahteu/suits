import { fimMenu } from "../../../../setup/menu.js"
import ligar_luz from "../../../../automacao/ligar.js"
import salvar from "../../../../olivia/salva.js"
import { index } from "../../../../tags/particao.js"
import locado from "../../../../tags/locacao.js"
import { limited } from "../../../../suites/tarefas/registros/limites.js"
import {inicia} from "../../../../contadores/relogio.js"
import make_url from "../../../../tools/urls.js"

export default function startLocacao() {
    const url_automacao = make_url("suites", "sacoes.php")
    const url_tarefa = make_url("suites", "limitemanutencao.php")
    const suite = $('#quarto_painel').text()
    if (confirm(`Iniciar a Suíte ${suite}?`) == true) {
        setTimeout(() => { locado(suite) }, 1)
        // setTimeout(() => {
        //     ligar_luz(suite)
        //     let vai = 'suite=' + suite + '&situacao=' + 'on'
        //     salvar(url_automacao, vai)
        // }, 50);
        setTimeout(() => { limited(url_tarefa, `trocaTempo`, suite, "t", "troca") }, 150)
        setTimeout(() => { index(suite, "locado") }, 300)
        setTimeout(() => { fimMenu() }, 400)
        setTimeout(() => {
            inicia(suite, "0", "0", "0")
        }, 500);
    }
}

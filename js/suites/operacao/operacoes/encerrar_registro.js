import desligar_luz from "../../../automacao/desligar.js"
import ultima_limpeza from "../../../botoes/limpar.js"
import envia_dados_limpeza from "../../../caixa/limpeza.js"
import encerrar_tarefas from "../../../limpar/tarefas.js"
import { stop } from "../../../setup/stop_relogios.js"
import { clean } from "../../../setup/clean_relogios.js"
import desfazer from "../../../tags/desfazer.js"
import { fimMenu } from "../../../setup/menu.js"
import apagar from "../../../olivia/apaga.js"
import { RAIZ } from "../../../raiz.js"
import envia_dados_revisao from "../../../caixa/revisao.js"


export default function encerrandoCicloLocacao(suite) {

    let base = JSON.parse(sessionStorage.getItem('offs'))
    let tipo = base.filter((t) => t.suite == suite);
    let motivo = localStorage.getItem('motivo_revisao')

    alert('Camareira Selecionada')

    stop[suite]()
    clean[suite](suite)


    if (tipo[0].tipo == 'revisao') {
        setTimeout(() => {
            var re = JSON.parse(localStorage.getItem("revisao"))
            var ca = $("#selecionar_camareira :checked").text()
            envia_dados_revisao(re.caixa, re.data, re.hora, re.suite, ca, motivo)
        }, 100)
    } else {
        setTimeout(() => {
            var re = JSON.parse(localStorage.getItem("limpeza"))
            var ca = $("#selecionar_camareira :checked").text()
            envia_dados_limpeza(re.caixa, re.data, re.hora, re.suite, re.tempo, ca)
        }, 100)
    }

    setTimeout(() => { desfazer(suite) }, 200)

    setTimeout(() => {
        desligar_luz(suite)
        var vai = 'tabela=' + 'acoes' + '&coluna=' + 'suite' + '&valor=' + suite
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai)
    }, 650)

    setTimeout(() => { fimMenu() }, 400)

    setTimeout(() => { ultima_limpeza(suite) }, 500)

    setTimeout(() => { localStorage.removeItem("limpeza") }, 600)
    setTimeout(() => { localStorage.removeItem("revisao") }, 600)

    setTimeout(() => { localStorage.removeItem(`_${suite}`) }, 700)

    setTimeout(() => { encerrar_tarefas(suite) }, 900)

    setTimeout(() => { $("#vq_painel").text("0.00") }, 150);
}

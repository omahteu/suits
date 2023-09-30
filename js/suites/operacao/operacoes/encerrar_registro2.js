import desligar_luz from "../../../automacao/desligar.js"
import ultima_limpeza from "../../../botoes/limpar.js"
import envia_dados_faxina from "../../../caixa/faxina.js"
import fechar_cofre from "../../../limpar/cofre.js"
import encerrar_tarefas from "../../../limpar/tarefas.js"
import { stop } from "../../../setup/stop_relogios.js"
import { clean } from "../../../setup/clean_relogios.js"
import desfazer from "../../../tags/desfazer.js"
import { fimMenu } from "../../../setup/menu.js"
import apagar from "../../../olivia/apaga.js"
import { RAIZ } from "../../../raiz.js"



export default function encerrando_registro2(suite) {

    alert('Camareira Selecionada')

    stop[suite]()
    clean[suite](suite)

    setTimeout(() => {
        var re = JSON.parse(localStorage.getItem("faxina"))
        var ca = $("#selecionar_camareira :checked").text()
        envia_dados_faxina(re.caixa, re.data, re.hora, re.suite, re.tempo, ca)
    }, 100)

    setTimeout(() => { desfazer(suite) }, 200)

    setTimeout(() => {
        desligar_luz(suite)
        var vai = 'tabela=' + 'acoes' + '&coluna=' + 'suite' + '&valor=' + suite
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, vai)
    }, 650)

    setTimeout(() => { fimMenu() }, 400)

    setTimeout(() => { ultima_limpeza(suite) }, 500)

    setTimeout(() => { localStorage.removeItem("faxina") }, 600)

    setTimeout(() => { localStorage.removeItem(`_${suite}`) }, 700)

    setTimeout(() => { fechar_cofre(suite) }, 800)

    setTimeout(() => { encerrar_tarefas(suite) }, 900)
}

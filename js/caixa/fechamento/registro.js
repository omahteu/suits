// import link from "../../setup/index.js"
import { data_atual } from "../../geradores/data.js"
import salvar from "../../olivia/salva.js"
import {RAIZ} from "../../raiz.js"

var soma = 0

export default async function _relatorio() {
    var hoje = data_atual()
    var nome = localStorage.getItem("nome")
    const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/atividade.php`)
    const rs = await rq.json()
    if (rs['status']) {
        rs['dados'].forEach(e => {
            if (e.nome == nome && e.data == hoje) {
                soma += Number(e.tempo)
            }
        })
        let dados = 'tempo=' + soma + '&nome=' + nome + '&data=' + hoje
        salvar(`http://${RAIZ}/suits/php/suites/atividade.php`, dados)
    }
}

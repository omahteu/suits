// import link from "../setup/index.js"
import { hora_atual_segundos } from "../geradores/hora.js"
// import pernoite from "../tags/pernoite.js"
import locado from "../tags/locacao.js"
// import { insereValor } from "./ajax/inserir.js"
import receber from "../quartos/auxiliares/funcao4.js"
import alterar from "../olivia/altera.js"
import { play } from "../setup/start_relogios.js"
import { clean } from "../setup/clean_relogios.js"
import {RAIZ} from "../raiz.js"
import apagar from "../olivia/altera.js"


$(document).on('click', '[class="card"]', function () {
    comecando_pernoite()
})

async function comecando_pernoite() {
    const i3 = receber("offs")
    const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/pernoite.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            let tipo = e.tipoPernoite
            let fim = e.fimPernoite
            let seAutomatica = tipo == "1"
            let seFixa = tipo == "2"
            if (seAutomatica) {
                i3.forEach(ele => {
                    if (ele.tipo == "pernoite") {
                        dder(ele.suite)
                    }
                })
            } else if (seFixa) {
                i3.forEach(ili => {
                    if (ili.tipo == "pernoite") {
                        rrew(suite, fim)
                    }
                })
            }
        });
    }
}

async function dder (suite) {
    const tr = await fetch(`http://${RAIZ}/suits/php/suites/show/tarefas.php`)
    const ts = await tr.json()
    if (ts['status']) {
        let filtro = ts['dados'].filter(g => g.suite == suite)
        let hora = moment(filtro[0].horario, "HH:mm:ss");
        hora.add(8, 'hours');
        var previsao = hora.format("HH:mm:ss");
        var agora = moment(hora_atual_segundos, "HH:mm:ss")
        if (agora.isSame(previsao) || agora.isBefore(previsao)) {
            desativar(suite)
        } else {
            console.log('ainda nao')
        }

    }
}

async function rrew (suite, fim) {
    const tr = await fetch(`http://${RAIZ}/suits/php/suites/show/tarefas.php`)
    const ts = await tr.json()
    if (ts['status']) {
        let hora = moment(`${fim}:00`, "HH:mm:ss");
        var agora = moment(hora_atual_segundos, "HH:mm:ss")
        if (agora.isSame(hora) || agora.isBefore(hora)) {
            desativar(suite)
        } else {
            console.log('ainda nao')
        }
    }
}

function desativar(suite) {
    locado(suite)
    clean[suite](suite)
    play[suite](suite, "0", "0", "0")

    setTimeout(() => {
        var dados = 'ssuite='+ suite+ '&tipo='+ 'locado' + '&hora='+ hora_atual_segundos()
        alterar(`http://${RAIZ}/suits/php/suites/editarinfosp.php`, dados)
    }, 500);

    setTimeout(() => {
        let boxer = 'tabela=' + 'tarefa' + '&coluna=' + 'suite' + '&valor=' + suite
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, boxer)
    }, 1000);

}

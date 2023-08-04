import link from "../../../setup/index.js"
import desligar_luz from "../../../automacao/desligar.js"
import { hora_atual } from "../../../geradores/hora.js"
import executor_tarefas from "../execucao/main.js"

setInterval(() => {
    monitorando_tarefas_suites()
}, 1000)

async function monitorando_tarefas_suites() {
    const requisicao = await fetch(link[34])
    const retorno = await requisicao.json()
    if (retorno.length > 0) {
        retorno.forEach(e => {
            let id = e.id
            let suite = e.suite
            let modo = e.modo
            let tipo = e.tipo
            let horario = e.horario
            switch (tipo) {
                case "faxina":
                    if (modo != "bt") {
                        executor_tarefas(String(horario), String(hora_atual()), id,  "bt")
                    }
                    break

                case "limpeza":
                    if (modo != "bt") {
                        executor_tarefas(String(horario), String(hora_atual()), id,  "bt")
                    }
                    break

                case "luz":
                    if (modo != "lt") {
                        executor_tarefas(String(horario), String(hora_atual()), id,  "lt")
                    }
                    break

                case "troca":
                    if (modo != "at") {
                        executor_tarefas(String(horario), String(hora_atual()), id,  "at")
                    }
                    break

                case "pernoite":
                    $(`[name=${suite}]`).css('display', 'none')
                    break

                default:
                    break
            }
        })
    }
}

import link from "../../../setup/index.js"
import { hora_atual } from "../../../geradores/hora.js"
import executor_tarefas from "../execucao/main.js"

setInterval(() => {
    monitorando_tarefas_checkout()
}, 1000)

async function monitorando_tarefas_checkout() {
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
                case "desistencia":
                    if (modo != "ad") {
                        executor_tarefas(String(horario), String(hora_atual()), id,  "lt")
                    }
                    break

                default:
                    break
            }
        })
    }
}

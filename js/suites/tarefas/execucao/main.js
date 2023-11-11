import desligar_luz from "../../../automacao/desligar.js"
import {atualizarTarefa} from "../../../quartos/estrutural/tarefa.js"

export function executor_tarefas(sistema, id, tag, suite) {
    const now = moment()
    const horarioAlvo = moment(sistema, 'HH:mm')
    const haum = horarioAlvo.add(1, 'minutes')
    if (now.isBefore(haum)) {

    } else {
        if (tag == "tt" || tag == "dt") {
            setTimeout(() => {
                atualizarTarefa(id, tag)
            }, 1000)
        } else {
            setTimeout(() => {
                atualizarTarefa(id, tag)
                desligar_luz(suite)
            }, 1000)
        }
    }
}

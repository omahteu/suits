import desligar_luz from "../../../automacao/desligar.js"
import {atualizarTarefa} from "../../../quartos/estrutural/tarefa.js"

export function executor_tarefas(sistema, agora, id, tag) {
    var hora1 = moment(sistema, 'HH:mm')
    var hora2 = moment(agora, 'HH:mm')

    var diferenca = moment.duration(hora2.diff(hora1));

    var diferencaEmHoras = diferenca.hours();
    var diferencaEmMinutos = diferenca.minutes();

    if (diferencaEmHoras >= 0 && diferencaEmMinutos >= 0){
        setTimeout(() => {
            if (tag == "bt"){
                atualizarTarefa(id, tag)
                desligar_luz(suite)
            } else if (tag == "lt") {
                // verificar se a luz está acesa
            } else {
                atualizarTarefa(id, tag)
            }
        }, 1000)
    }
}

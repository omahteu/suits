// import link from "../../../setup/index.js"
// import desligar_luz from "../../../automacao/desligar.js"
import { hora_atual } from "../../../geradores/hora.js"
import {executor_tarefas} from "../execucao/main.js"
import {RAIZ} from "../../../raiz.js"

setInterval(() => {
    monitoramento()
}, 1000)

// async function monitorando_tarefas_suites() {
//     const requisicao = await fetch(link[34])
//     const retorno = await requisicao.json()
//     if (retorno.length > 0) {
//         retorno.forEach(e => {
//             let id = e.id
//             let suite = e.suite
//             let modo = e.modo
//             let tipo = e.tipo
//             let horario = e.horario
//             switch (tipo) {
//                 case "faxina":
//                     if (modo != "bt") {
//                         executor_tarefas(String(horario), String(hora_atual()), id,  "bt")
//                     }
//                     break

//                 case "limpeza":
//                     if (modo != "bt") {
//                         executor_tarefas(String(horario), String(hora_atual()), id,  "bt")
//                     }
//                     break

//                 case "luz":
//                     if (modo != "lt") {
//                         executor_tarefas(String(horario), String(hora_atual()), id,  "lt")
//                     }
//                     break

//                 case "troca":
//                     if (modo != "at") {
//                         executor_tarefas(String(horario), String(hora_atual()), id,  "at")
//                     }
//                     break

//                 case "pernoite":
//                     $(`[name=${suite}]`).css('display', 'none')
//                     break

//                 default:
//                     break
//             }
//         })
//     }
// }

async function monitoramento() {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/tarefas.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            switch (e.tipo) {
                case 'faxina':
                    if (e.modo != "bt") {
                        executor_tarefas(String(e.horario), String(hora_atual()), e.id,  "bt")
                    }
                    break;

                case 'limpeza':
                    if (e.modo != "bt") {
                        executor_tarefas(String(e.horario), String(hora_atual()), e.id,  "bt")
                    }
                    break

                case 'luz':
                    if (e.modo != "lt") {
                        executor_tarefas(String(e.horario), String(hora_atual()), e.id,  "lt")
                    }
                    break

                case 'troca':
                    if (e.modo != "at") {
                        executor_tarefas(String(e.horario), String(hora_atual()), e.id,  "at")
                    }
                    break

                case 'pernoite':
                    $(`[name=${e.suite}]`).css('display', 'none')
                    break
            
                default:
                    break;
            }
        });
    }
}
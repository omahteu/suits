import { executor_tarefas } from "../execucao/main.js";
import { RAIZ } from "../../../raiz.js";

setInterval(() => {
    monitoramento();
}, 1500);

async function monitoramento() {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/tarefas.php`);
    const rs = await rq.json();
    if (rs["status"]) {
        rs["dados"].forEach((e) => {
            switch (e.tipo) {
                case "faxina":
                    if (e.modo != "ft") {
                        executor_tarefas(String(e.horario), e.id, "ft", e.suite);
                    }
                    break;

                case "limpeza":
                    if (e.modo != "lt") {
                        executor_tarefas(String(e.horario), e.id, "lt", e.suite);
                    }
                    break;

                case "troca":
                    if (e.modo != "tt") {
                        executor_tarefas(String(e.horario), e.id, "tt", e.suite);
                    }
                    break;

                case "pernoite":
                    $(`[name=${e.suite}]`).css("display", "none");
                    break;

                case "desistencia":
                    if (e.modo != "dt") {
                        executor_tarefas(String(e.horario), e.id, "dt", e.suite);
                    }
                    break
                
                case "revisao":
                    if (e.modo != "rt") {
                        executor_tarefas(String(e.horario), e.id, "rt", e.suite);
                    }
                    break

                default:
                    break;
            }
        })
    }
}

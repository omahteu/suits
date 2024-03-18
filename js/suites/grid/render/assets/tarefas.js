import { executor_tarefas } from "../../../../suites/tarefas/execucao/main.js";
import make_url from "../../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../../tools/ajax.js";

export default function monitoramento() {

    const url = make_url("somelier", "main.php")

    fazerRequisicaoAjax(url, "POST", {tabela: "tarefa"}, function(response) {
        const data = JSON.parse(response)


        if (data.status) {
            data.dados.forEach((e) => {
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


    }, function(error) {
        console.log(error)
    })



}

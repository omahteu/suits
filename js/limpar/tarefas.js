import apagar from "../olivia/apaga.js"
import { RAIZ } from "../raiz.js"

export default async function encerrar_tarefas(suite) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/tarefas.php`)
    const rs = await rq.json()
    if (rs["dados"]) {
        let dados = rs["dados"].filter(e => e.suite == suite)
        dados.forEach(i => {
            var dados = 'tabela=' + 'tarefa' + '&coluna=' + 'suite' + '&valor=' + i.suite
            apagar(`http://${RAIZ}/suits/php/suites/excluirtarefa.php`, dados)
        });
    }
}

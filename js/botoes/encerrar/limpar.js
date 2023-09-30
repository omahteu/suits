import apagar from "../../olivia/apaga.js"

import link from "../../setup/index.js"

import { RAIZ } from "../../raiz.js"

export default async function limpando() {
    let suite = localStorage.getItem("last")
    const rq1 = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
    const rs1 = await rq1.json()
    if (rs1["status"]) {
        rs1["dados"].forEach(e => {
            let dados = e.filter(i => i.quarto == suite)
            dados.forEach(x => {
                let dados1 = 'tabela=' + 'comanda' + '&coluna=' + 'suite' + '&valor=' + x.suite
                apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados1)
            });
        });
    }
    const rq2 = await fetch(`http://${RAIZ}/suits/php/suites/show/patio.php`)
    const rs2 = await rq2.json()
    if (rs2["dados"]) {
        rs2["dados"].forEach(e => {
            let dados = e.filter(i => i.quarto == suite)
            dados.forEach(x => {
                let dados1 = 'tabela=' + 'patio' + '&coluna=' + 'suite' + '&valor=' + x.suite
                apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados1)
                apagar(url)
            });
        });
    }
    localStorage.removeItem("last")
    localStorage.removeItem(`troca${suite}`)
    localStorage.removeItem(`codigo${suite}`)
}

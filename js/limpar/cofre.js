// import link from "../setup/index.js"
import apagar from "../olivia/apaga.js"
import { RAIZ } from "../raiz.js"

export default async function fechar_cofre(suite) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`)
    const rs = await rq.json()
    if (rs["dados"]) {
        let dados = rs["dados"].filter(e => e.suite == suite)
        dados.forEach(i => {
            let dados = 'tabela=' + 'cofre' + '&coluna=' + 'suite' + '&valor=' + i.suite
            apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados)
        });
    }
}

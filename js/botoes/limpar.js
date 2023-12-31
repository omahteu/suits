import apagar from "../olivia/apaga.js"
import receber from "../quartos/auxiliares/funcao4.js"
import { RAIZ } from "../raiz.js"

export default async function ultima_limpeza(suite) {
    localStorage.removeItem("dadosQuarto")
    localStorage.removeItem(`codigo${suite}`)
    localStorage.removeItem("quarto")
    localStorage.removeItem(`manu${suite}`)
    let onze = receber("offs")
    var dados = onze.filter(quartos => quartos.suite == suite)
    let einfos = 'tabela=' + 'infos' + '&coluna=' + 'suite' + '&valor=' + dados[0].suite
    apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, einfos)
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var dados = rs["dados"].filter(q => q.suite == suite)
        dados.forEach(i => {
            let ecomand = 'tabela=' + 'comanda' + '&coluna=' + 'suite' + '&valor=' + i.suite
            apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, ecomand)
        });
    }
}

import alterar from "../../olivia/altera.js"
import { RAIZ } from "../../raiz.js"

export default async function registrando(suite) {
    const requestComanda = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
    const responseComanda = await requestComanda.json()
    if (responseComanda["status"]) {
        var dadosComanda = responseComanda["dados"].filter(i => i.suite == suite)
        dadosComanda.forEach(async x => {
            const requestProdutos = await fetch(`http://${RAIZ}/suits/php/estoque/show/produtos.php`)
            const responseProdutos = await requestProdutos.json()
            if (responseProdutos["status"]) {
                let produ = responseProdutos["dados"].filter(bu => bu.descricao == x.descricao)
                produ.forEach(el => {
                    var atual = parseInt(el.quantidade)
                    var novo = parseInt(atual) - parseInt(x.quantidade)
                    let caixa = 'codigo=' + el.codigo + '&descricao=' + el.descricao + '&valorunitario=' + el.valorunitario + '&quantidade=' + novo + '&categoria=' + el.categoria + '&data=' + el.data
                    alterar(`http://${RAIZ}/suits/php/suites/editarprodutos.php`, caixa)
                });
            }
        })
    }
}

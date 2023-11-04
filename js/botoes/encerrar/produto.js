import alterar from "../../olivia/altera.js"
import { RAIZ } from "../../raiz.js"

export default async function registrando() {
    let suite = localStorage.getItem("last")
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var dados_comanda = rs["dados"].filter(i => i.suite == suite)
        dados_comanda.forEach(async x => {
            const pq = await fetch(`http://${RAIZ}/suits/php/estoque/show/produtos.php`)
            const ps = await pq.json()
            if (ps["status"]) {
                let produ = ps["dados"].filter(bu => bu.descricao == x.descricao)
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

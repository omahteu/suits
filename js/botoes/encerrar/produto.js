import alterar from "../../olivia/altera.js"

import { RAIZ } from "../../raiz.js"

export default async function registrando() {
    let suite = localStorage.getItem("last")
    var box = []
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            var dados_comanda = e.filter(i => i.quarto == suite)
            dados_comanda.forEach(x => {
                box.push(x.descricao, x.quantidade)
            })
        });
    }
    const pq = await fetch(`http://${RAIZ}/suits/php/estoque/show/produtos.php`)
    const ps = await pq.json()
    if (ps["statis"]) {
        ps["dados"].forEach(e => {
            var resultado_produtos = box.filter(estadosComS => (estadosComS.length > 2))
            var resultado_quantidade = box.filter(estadosComS => (estadosComS.length < 3))
            for (var i = 0; i <= resultado_produtos.length; i++) {
                var conjunto = [resultado_produtos[i], resultado_quantidade[i]]
                var produto = conjunto[0]
                var produto_quantidade = conjunto[1]
                var dados = e.filter(u => u.descricao == produto)
                dados.forEach(el => {
                    var estoque = el.quantidade
                    let caixa = 'codigo=' + el.codigo + '&descricao=' + el.descricao + '&valorunitario=' + el.valorunitario + '&quantidade=' + parseInt(estoque) - parseInt(produto_quantidade) + '&categoria=' + el.categoria + '&data=' + el.data 
                    alterar(`http://${RAIZ}/suits/php/`, caixa)
                })
            }
        });
    }
}

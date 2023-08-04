import alterar from "../../olivia/altera.js"

import link from "../../setup/index.js"

export default function registrando() {
    let suite = localStorage.getItem("last")
    var box = []
    $.get(link[5], (e) => {
        var dados_comanda = e.filter(i => i.quarto == suite)
        dados_comanda.forEach(x => {
            box.push(x.descricao, x.quantidade)
        })
    })
    $.get(link[16], (e) => {
        var resultado_produtos = box.filter(estadosComS => (estadosComS.length > 2))
        var resultado_quantidade = box.filter(estadosComS => (estadosComS.length < 3))
        for (var i = 0; i <= resultado_produtos.length; i++) {
            var conjunto = [resultado_produtos[i], resultado_quantidade[i]]
            var produto = conjunto[0]
            var produto_quantidade = conjunto[1]
            var dados = e.filter(u => u.descricao == produto)
            dados.forEach(el => {
                var estoque = el.quantidade
                let dados = {
                    codigo: el.codigo,
                    descricao: el.descricao,
                    valorunitario: el.valorunitario,
                    quantidade: parseInt(estoque) - parseInt(produto_quantidade),
                    categoria: el.categoria,
                    data: el.data
                }
                alterar(`${link[16]}${el.id}/`, dados)
            })
        }
    })
}

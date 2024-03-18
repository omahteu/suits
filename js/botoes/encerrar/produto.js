import make_url from "../../tools/urls.js"
import fazerRequisicaoAjax from "../../tools/ajax.js"

export default async function estoque(suite) {
    let url = make_url("somelier", "main.php")
    let url2 = make_url("estoque", "modificaQuantidadeProdutos.php")

    fazerRequisicaoAjax(url, "POST", {tabela: "comanda"}, function (responseComanda) {
        let responseComandaJSON = JSON.parse(responseComanda)
        if (responseComandaJSON['status']) {
            let comanda = responseComandaJSON["dados"].filter(i => i.suite == suite)
            comanda.forEach(async item => {
                fazerRequisicaoAjax(url, "POST", {tabela: "produto"}, function (responseEstoque) {
                    let responseEstoqueJSON = JSON.parse(responseEstoque)
                    if (responseEstoqueJSON['status']) {
                        let estoque = responseEstoqueJSON["dados"].filter(i => i.descricao == item.descricao)
                        estoque.forEach(produto => {
                            var novo = parseInt(produto.quantidade) - parseInt(item.quantidade)
                            let caixa = 
                            'codigo=' + produto.codigo + 
                            '&descricao=' + produto.descricao + 
                            '&valorunitario=' + produto.valorunitario + 
                            '&quantidade=' + novo + 
                            '&categoria=' + produto.categoria + 
                            '&data=' + produto.data
                            fazerRequisicaoAjax(url2, "POST", caixa, function (e) {
                                console.log(e)
                            }, function (erro) {
                                console.log(erro)
                            })
                        });
                    }
                }, function (erro) {
                    console.log(erro)
                })
            });
        }
    }, function (erro) {
        console.log(erro)
    })
}

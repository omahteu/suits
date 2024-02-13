import fazerRequisicaoAjax from '../../tools/ajax.js'
import make_url from '../../tools/urls.js'

var url = make_url('home', 'produtos.php')

fazerRequisicaoAjax(url, "GET", null, function (reply) {
    let dados = JSON.parse(reply)
    if (dados['status']) {
        var produtos = document.getElementById('tabelaHomeProdutos')
        produtos.innerHTML = ''
        dados["dados"].forEach(e => {
            produtos.innerHTML +=
                `
                <tr>
                    <td>${e.codigo}</td>
                    <td>${e.descricao}</td>
                    <td>${e.valorunitario}</td>
                    <td>${e.quantidade}</td>
                    <td>${e.categoria}</td>
                    <td>${e.data}</td>
                </tr>
            `
        });
    }
}, function (erro) {
    console.log(erro)
})

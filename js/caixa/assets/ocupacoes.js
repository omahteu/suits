import fazerRequisicaoAjax from '../../tools/ajax.js'
import make_url from '../../tools/urls.js'

var url = make_url('home', 'pagamentos.php')

fazerRequisicaoAjax(url, "GET", null, function(reply) {
    var dados = JSON.parse(reply)
    var ocupacoes = document.getElementById('tabelaHomeOcupacoes')
    ocupacoes.innerHTML = ''

    if(dados['status']) {
        dados['dados'].forEach(e => {
            ocupacoes.innerHTML += '<tr>' +
            `<td>${e.data}</td>` +
            `<td>${e.codigo}</td>` +
            `<td>${e.suite}</td>` +
            `<td>${e.entrada}</td>` +
            `<td>${e.saida}</td>` +
            `<td>${e.total}</td>` +
            '</tr>'
        });
    }

}, function(erro) {
    console.log(erro)
})

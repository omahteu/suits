import { data_atual } from "../../geradores/data.js"
import { hora_atual_segundos } from "../../geradores/hora.js"
import fazerRequisicaoAjax from "../../tools/ajax.js"
import make_url from "../../tools/urls.js"

$(document).on("submit", "#formCadastros", function(e) {
    e.preventDefault()
    var url = make_url('caixa', 'caixa.php')
    var usar_produtos_sem_caixa = $("#usarProdutosSemCaixa").val()
    var usuario = localStorage.getItem("nome")
    var fundoCaixa = $("#valorFundoCaixa").val()

    localStorage.setItem('caixa', 'aberto')
    localStorage.setItem("prod", usar_produtos_sem_caixa)
    fundoCaixa != "" ? localStorage.setItem('fundo', fundoCaixa) : localStorage.setItem('fundo', '0')

    let dados = 'data=' + data_atual() +
     '&entrada=' + hora_atual_segundos() +
      '&usuario=' + usuario +
       '&fundo=' + fundoCaixa +
        '&total=' + '' +
         '&saida=' + ''

    fazerRequisicaoAjax(url, 'POST', dados, function(reply) {
        if (reply == 'true') {
            alert("Caixa Aberto!")
            $(location).attr('href', './home.html')
        }
    }, function (erro) {
        console.log(erro)
    })

})

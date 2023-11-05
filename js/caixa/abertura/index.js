// import { data_atual } from "../../geradores/data.js"
// import { hora_atual_segundos } from "../../geradores/hora.js"
// import link from "../../setup/index.js"
// import salvar from "../../olivia/salva.js"
// import {RAIZ} from "../../raiz.js"

$(document).on("change", "#usarFundoCaixa", function(){
    let tipo = $("#usarFundoCaixa :selected").text()
    if (tipo == "Sim") {
        $("#valorFundoCaixa").css("display", "Inline-block")
    } else {
        $("#valorFundoCaixa").css("display", "none")
    }
})

$(document).on("click", "#abrirCaixa", function() {
    var utilizar_fundo_caixa = $("#usarFundoCaixa").val()
    var usar_produtos_sem_caixa = $("#usarProdutosSemCaixa").val()
    // var usuario = $("#usuario").val()
    var fundoCaixa = $("#valorFundoCaixa").val()
    var fundoCaixa2 = "0"

    let c1 = utilizar_fundo_caixa == 'Usar Fundo de Caixa?'
    let c2 = usar_produtos_sem_caixa == "Usar produtos sem estoque?"

    if (c1 || c2) {
        alert('Escolha se ultilizará o fundo de caixa, e Produtos sem estoque!')
    } else if (utilizar_fundo_caixa == "sim" && usar_produtos_sem_caixa == "sim") {
        localStorage.setItem('caixa', 'aberto')
        localStorage.setItem("prod", usar_produtos_sem_caixa)     
        var fundoCaixa_formatado = String(fundoCaixa).replace(",", ".")
        localStorage.setItem('fundo', fundoCaixa_formatado)
        // let dados = 'data=' + data_atual() + '&entrada=' + hora_atual_segundos() + '&usuario=' + usuario + '&fundo=' + fundoCaixa_formatado + '&total=' + '' + '&saida=' + ''
        // salvar(`http://${RAIZ}/suits/php/suites/caixa.php`, dados)
        alert("Caixa Aberto!")
        $(location).attr('href', '../html/home.html')
    } else if (utilizar_fundo_caixa == "sim" && usar_produtos_sem_caixa == "nao") {
        localStorage.setItem('caixa', 'aberto')
        localStorage.setItem("prod", usar_produtos_sem_caixa)
        var fundoCaixa_formatado = String(fundoCaixa).replace(",", ".")
        localStorage.setItem('fundo', fundoCaixa_formatado)
        // let dados = 'data=' + data_atual() + '&entrada=' + hora_atual_segundos() + '&usuario=' + usuario + '&fundo=' + fundoCaixa_formatado + '&total=' + '' + '&saida=' + ''
        // salvar(`http://${RAIZ}/suits/php/suites/caixa.php`, dados)
        alert("Caixa Aberto!")
        $(location).attr('href', '../html/home.html')
    } else if (utilizar_fundo_caixa == "nao" && usar_produtos_sem_caixa == "sim") {
        localStorage.setItem('caixa', 'aberto')
        localStorage.setItem("prod", usar_produtos_sem_caixa)
        var fundoCaixa_formatado = String(fundoCaixa2).replace(",", ".")
        localStorage.setItem('fundo', fundoCaixa_formatado)
        // let dados = 'data=' + data_atual() + '&entrada=' + hora_atual_segundos() + '&usuario=' + usuario + '&fundo=' + fundoCaixa_formatado + '&total=' + '' + '&saida=' + ''
        // salvar(`http://${RAIZ}/suits/php/suites/caixa.php`, dados)
        alert("Caixa Aberto!")
        $(location).attr('href', '../html/home.html')
    } else if (utilizar_fundo_caixa == "nao" && usar_produtos_sem_caixa == "nao") {
        localStorage.setItem('caixa', 'aberto')
        localStorage.setItem("prod", usar_produtos_sem_caixa)
        var fundoCaixa_formatado = String(fundoCaixa2).replace(",", ".")
        localStorage.setItem('fundo', fundoCaixa_formatado)
        // let dados = 'data=' + data_atual() + '&entrada=' + hora_atual_segundos() + '&usuario=' + usuario + '&fundo=' + fundoCaixa_formatado + '&total=' + '' + '&saida=' + ''
        // salvar(`http://${RAIZ}/suits/php/suites/caixa.php`, dados)
        alert("Caixa Aberto!")
        $(location).attr('href', '../html/home.html')
    }
})

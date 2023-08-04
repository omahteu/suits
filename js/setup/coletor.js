$(document).ready(function(){
    setInterval(() => {
        var preco_quarto = $("#valorQuarto").text()
        var permanencia = $("#tempoPermanencia").text()
        var add_permanencia = $("#valor_addPermanencia").text()
        var itens = $("#valorItens").text()
        var desconto = $("#valorDesconto").text()
        var subtotal = $("#valor_subtotal").text()
        var parcelas = $("#nparcelas").text()
        var valor_parcelas = $("#valor_parcelas").text()
        var total = $("#totalGeral").text()
        var dados = {
            a1: preco_quarto,
            a2: permanencia,
            a3: add_permanencia,
            a4: itens,
            a5: desconto,
            a6: subtotal,
            a7: parcelas,
            a8: valor_parcelas,
            a9: total
        }
        localStorage.setItem('index', JSON.stringify(dados))
    }, 1000);
})
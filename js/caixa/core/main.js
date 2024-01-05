import formatarMoeda from '../../tools/moeda.js'

$(document).on("keyup", "#valorFundoCaixa", function() {
    formatarMoeda($(this))
})

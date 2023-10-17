import debito from "../botoes/pagamento/debito.js"
import credito from "../botoes/pagamento/credito.js"

$(document).on("change", "#modo_pagamento", function() {
    let forma = $(this).find("option:selected").text()


    switch (forma.slice(0, 7)) {
        case 'Crédito':
            console.log('credito')
            $("#numero_parcelas").val("1")
            $("#numero_parcelas").css('display', 'inline')
            credito(forma, $("#numero_parcelas").val())
            break;

        case 'Débito ':
            console.log('debito')
            // debito(forma)
            break

        default:
            break;
    }
})

$(document).on("change", "#numero_parcelas", function() {
    let parcelas = $(this).find("option:selected").text()
    let pagam = $("#modo_pagamento").find("option:selected").text()
    var tarifa = pagam.match(/\d/);
    let subtotal = parseFloat($("#valor_subtotal").text())
    let decimal = parseFloat(tarifa) / 100
    let acrescentado = subtotal * decimal
    let addParcela = acrescentado * parcelas
    let subtotalAcrescido = subtotal + addParcela
    let valorTarifado = subtotalAcrescido / parcelas
    $("#nparcelas").text(parcelas)
    $("#valor_parcelas").text(valorTarifado.toFixed(2))
    // $("#totalGeral").text(subtotalAcrescido.toFixed(2))
    $("#confirma_parcelas").css("background", "black").attr("disabled", "true")
    //$("#numero_parcelas").attr("disabled", "true")
    $("#modo_pagamento").attr("disabled", "true")
    sessionStorage.setItem('vsuite', subtotalAcrescido.toFixed(2))
})
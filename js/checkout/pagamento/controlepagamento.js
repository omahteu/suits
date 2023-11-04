import debito from "../../botoes/pagamento/debito.js"

$(document).on("change", "#modo_pagamento", function() {
    let forma = $(this).find("option:selected").text()
    switch (forma.slice(0, 7)) {
        case 'Crédito':
            $("#numero_parcelas").val("0")
            $("#numero_parcelas").css('display', 'inline')
            break;

        case 'Débito ':
            debito(forma)
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
    let subTotalTarifado = acrescentado + subtotal
    let subTotalTarifadoParcelado = subTotalTarifado / parcelas
    $("#nparcelas").text(parcelas)
    $("#valor_parcelas").text(parseFloat(subTotalTarifadoParcelado).toFixed(2))
    $("#modo_pagamento").attr("disabled", "true")
    localStorage.setItem('vpr', acrescentado)
})

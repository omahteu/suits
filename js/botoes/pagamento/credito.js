export default function credito(tarifa, parcelas) {
    let subtotal = parseFloat($("#valor_subtotal").text())
    let decimal = parseFloat(tarifa) / 100
    let acrescentado = subtotal * decimal
    let addParcela = acrescentado * parcelas
    let subtotalAcrescido = subtotal + addParcela
    let valorTarifado = subtotalAcrescido / parcelas
    $("#nparcelas").text(parcelas)
    $("#valor_parcelas").text(valorTarifado.toFixed(2))
    $("#totalGeral").text(subtotalAcrescido.toFixed(2))
    $("#confirma_parcelas").css("background", "black").attr("disabled", "true")
    $("#numero_parcelas").attr("disabled", "true")
    $("#modo_pagamento").attr("disabled", "true")
}

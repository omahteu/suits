export default function debito(tarifa) {
    var suite = $("#suiteEncerrando").text()
    var tarifa = tarifa.match(/\d/);
    let subtotal = parseFloat($("#valor_subtotal").text())
    let decimal = parseFloat(tarifa) / 100
    let acrescentado = subtotal * decimal
    let subTotalTarifado = acrescentado + subtotal
    let subTotalTarifadoParcelado = subTotalTarifado / 1
    $("#nparcelas").text("1")
    $("#valor_parcelas").text(parseFloat(subTotalTarifadoParcelado).toFixed(2))
    $("#modo_pagamento").attr("disabled", "true")
    localStorage.setItem(`vpr${suite}`, acrescentado)
}

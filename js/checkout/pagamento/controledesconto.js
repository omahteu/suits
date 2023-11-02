function validar_desconto(modo, desconto, subtotal) {
    switch (modo) {
        case 'valor':
            if (desconto != "") {
                localStorage.setItem('vd', desconto)
                $("#valorDesconto").text(`R$ ${desconto}`)
            }
            break;

        case 'porcento':
            if (desconto != "") {
                let desconto_decimal = parseInt(desconto) / 100
                let substracao_porcento = subtotal * desconto_decimal
                localStorage.setItem('vd', substracao_porcento)
                $("#valorDesconto").text(`${desconto} %`)
            }
            break

        default:
            break;
    }
}

$(document).on("change", "#modo_desconto", function () {
    let tipo = $("#modo_desconto").find('option:selected').val()
    let valor_desconto = $("#valor_desconto").val()
    let subtotal = parseFloat($("#valor_subtotal").text())
    validar_desconto(tipo, valor_desconto, subtotal)
})

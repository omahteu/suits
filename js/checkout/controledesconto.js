$(document).ready(function() {
    setInterval(() => {
        let tipo_desconto = $("#modo_desconto :selected").text()
        let valor_desconto = $("#valor_desconto").val()
        let subtotal = parseFloat($("#valor_subtotal").text())
        validar_desconto(tipo_desconto, subtotal, valor_desconto)
    }, 1000);
})

function validar_desconto(modo, desconto, subtotal) {
    switch (modo) {
        case 'Valor':
            let substracao_fixa = subtotal - parseFloat(desconto).toFixed(2)
            localStorage.setItem('vtotal', substracao_fixa)
            break;

        case 'Percentual':
            let desconto_decimal = parseInt(desconto) / 100
            let substracao_porcento = subtotal * desconto_decimal
            localStorage.setItem('vtotal', substracao_porcento)
            break

        case 'Modo':
            localStorage.setItem('vtotal', subtotal)
            break
    
        default:
            break;
    }
}

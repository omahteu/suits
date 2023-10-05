import debito from "../botoes/pagamento/debito.js"
import credito from "../botoes/pagamento/credito.js"

$(document).on("change", "#modo_pagamento", function() {
    let forma = $("#modo_pagamento :selected").text()

    switch (forma) {
        case 'Crédito':
            $("#numero_parcelas").val("1")
            $("#numero_parcelas").css('display', 'inline')
            credito(forma, $("#numero_parcelas").val())
            break;

        case 'Débito':
            debito(forma)
            break

        default:
            break;
    }
})

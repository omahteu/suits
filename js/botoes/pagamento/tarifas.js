import credito from "./credito.js"
import debito from "./debito.js"

export default function buscaTarifasBandeiras() {
    $(document).on("change", "#modo_pagamento", function () {
        let forma = $("#modo_pagamento :selected")
        let confirmacao = $("#nao_aplicavel").attr("disabled")
        if (confirmacao == undefined) {
            alert("Selecione desconto, ou Não Aplicável")
            $('#modo_pagamento').prop('selectedIndex', 0)
        } else {
            if (forma.text().slice(0, 2) == "Cr") {
                $("#numero_parcelas").val("0")
                let campo_parcelas = $("#numero_parcelas")
                campo_parcelas.css('display', 'inline')
                $(document).on("click", "#confirma_parcelas", function () {
                    if (campo_parcelas.val() == "0") {
                        alert("Escolha o número de parcela!")
                    } else {
                        credito(forma.val(), campo_parcelas.val())
                    }
                })
            } else if (forma.text().slice(0, 2) == "Dé") {
                $("#numero_parcelas").val("1")
                $(document).on("click", "#confirma_parcelas", function () {
                    debito(forma.val())
                })
            } else if (forma.text().slice(0, 2) == "Di") {
                let campo_parcelas = $("#numero_parcelas")
                campo_parcelas.css('display', 'none')
            }
        }
    })
}

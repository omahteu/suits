import link from "../../setup/index.js"

export default function exibeCredito() {
    $.get(link[4], e => {
        e.forEach(el => {
            $('#modo_pagamento').append(`<option value="${el.porcentagem}" >Crédito ${el.bandeira} - ${el.porcentagem}%</option>`)
        });
    })
}

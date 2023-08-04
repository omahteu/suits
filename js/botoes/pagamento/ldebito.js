import link from "../../setup/index.js"

export default function exibeDebito() {
    $.get(link[8], e => {
        e.forEach(el => {
            $('#modo_pagamento').append(`<option value="${el.porcentagem}" >Débito ${el.bandeira} - ${el.porcentagem}%</option>`)
        });
    })
}

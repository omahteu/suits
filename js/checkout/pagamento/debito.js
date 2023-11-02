import { RAIZ } from "../../raiz.js";

var band = {
    1: 'American Express',
    2: 'Elo',
    3: 'Hipercard',
    4: 'Mastercard',
    5: 'Visa'
}

export default async function exibeDebito() {
    const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/debito.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(el => {
            $('#modo_pagamento').append(`<option value="${el.porcentagem}" >Débito ${band[el.bandeira]} - ${el.porcentagem}%</option>`)
        });
    }
}

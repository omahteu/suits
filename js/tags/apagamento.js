export default function ag_pagamento(q) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#00FF00"
    })
}
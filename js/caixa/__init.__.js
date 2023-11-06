import {saldo} from "./pagamentos/saldo.js"
// import {sangria} from "./sangria/sangria.js"
import {todos_pagamentos} from "./pagamentos/pagamentos.js"
import {RAIZ} from "../raiz.js"


$(window).on("load", function () {
    saldo()
    // sangria()
    todos_pagamentos()
    exibeTotaisTipos()
})


async function exibeTotaisTipos() {
    const rq = await fetch(`http://${RAIZ}/suits/php/caixa/show/pagamentos.php`)
    const rs = await rq.json()
    if (rs["dados"]) {
        rs["dados"].forEach(e => {
            console.log(e)
        });
    }
}

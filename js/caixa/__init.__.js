import {saldo} from "./pagamentos/saldo.js"
// import {sangria} from "./sangria/sangria.js"
import {todos_pagamentos} from "./pagamentos/pagamentos.js"
// import {RAIZ} from "../raiz.js"


$(window).on("load", function () {

    // sangria()
    todos_pagamentos()
})

setTimeout(() => {
    saldo()
}, 2000);

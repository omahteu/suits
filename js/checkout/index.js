import { recupera_permanencia } from "../quartos/ajax/get/permanencia.js";
// import atualizaValores from "../quartos/calculos/porHora.js"
// import { comanda } from "./_comanda.js";
import { somaComanda } from "./_somaComanda.js";
import { vsuite } from "./_quarto.js";
import adicionais from "./_adicionais.js";
import { subtotal } from "./_subtotal.js";
import { desconto } from "./_desconto.js";
import { naoAplicavel } from "./_naoaplicavel.js";
import { total2 } from "./_total.js";
import { defa } from "./_defaultpag.js";

$(document).ready(function () {
    var suite = localStorage.getItem("last");
    defa();
    // comanda(suite);
    somaComanda(suite);
    vsuite();
    recupera_permanencia(suite);
    // atualizaValores(suite)
    subtotal();
    adicionais(suite, "valorQuarto", "valor_addPermanencia");
    desconto();
    naoAplicavel();

});



setInterval(() => {
    total2()
}, 1000);
import nomes_camareiras from "./controlecamareira.js"
import exibeCredito from "./credito.js"
import exibeDebito from "./debito.js"
import somaComanda from "../_somaComanda.js";
import recupera_permanencia from "../../quartos/ajax/get/permanencia.js";
import adicionais from "../_adicionais.js";
import vsuite from "../_quarto.js";
import subtotal from "../_subtotal.js";

$(window).on("load", function() {
    nomes_camareiras()
    exibeCredito()
    exibeDebito()

    setTimeout(() => {
        var suite = localStorage.getItem("last");
        somaComanda(suite)
        recupera_permanencia(suite)
        adicionais(suite, "valorQuarto", "valor_addPermanencia")
        vsuite()
        subtotal()
    }, 500);
})

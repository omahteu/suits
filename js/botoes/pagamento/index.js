import buscaTarifasBandeiras from "./tarifas.js";
import exibeCredito from "./lcredito.js";
import exibeDebito from "./ldebito.js";

$(document).ready(function () {
    buscaTarifasBandeiras();
    exibeCredito();
    exibeDebito();
});

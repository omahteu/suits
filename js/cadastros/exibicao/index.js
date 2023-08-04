import { exibir_categorias_cadastradas } from "./categorias.js";
import { exibe_suites } from "./suites.js";
import { exibe_placas } from "./placas.js";

$(document).on("click", "#tab_automacao", function() {
    exibe_suites()
    exibe_placas()
})

$(document).on("click", "#tab_produto", function() {
    exibir_categorias_cadastradas()
})

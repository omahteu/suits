import {produtos} from "./carregando.js"
import { operantis } from "./operacao.js"

$(window).on("load", function() {
    produtos()
    operantis()
})

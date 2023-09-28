// import link from "../../setup/index.js"
import salvar from "../../olivia/salva.js"
import {RAIZ} from "../../raiz.js"

export function insereValor(suite, valor, tipo){
    let dados = 'suite='+ suite+ '&valor='+ valor+ '&tipo='+ tipo
    salvar(`http://${RAIZ}/suits/php/suites/cofrepernoite.php`, dados)
}

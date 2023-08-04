import link from "../../setup/index.js"
import salvar from "../../olivia/salva.js"

export function insereValor(suite, valor, tipo){
    let dados = {suite: suite, valor: valor, tipo: tipo}
    salvar(link[36], dados)
}

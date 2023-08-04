import link from "../../setup/index.js"
import salvar from "../../olivia/salva.js"


export default function iniciarValor(suite, valor){
    let dados = {
        suite: suite,
        valor: valor,
        tipo: "locacao"
    }
    salvar(link[36], dados)
}

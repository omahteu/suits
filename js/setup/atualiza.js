// import link from "./index.js"
import alterar from "../olivia/altera.js"
import receber from "../quartos/auxiliares/funcao4.js"
import { RAIZ } from "../raiz.js"

export default function atualiza_status(suite, status) {
    let onze = receber("offs")
    let dados = onze.filter(i => i.suite == suite)
    let id = dados[0].id
    let data = 'tipo='+ status + '&id=' + id
    alterar(`http://${RAIZ}/suits/php/suites/editarstatus.php`, data)
}

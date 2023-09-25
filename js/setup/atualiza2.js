//import link from "./index.js"
import alterar from "../olivia/altera.js"
import receber from "../quartos/auxiliares/funcao4.js"
import { hora_atual_segundos } from "../geradores/hora.js"
import {RAIZ} from "../raiz.js"

export default function atualiza_status_e_reinicia(suite, status) {
    let onze = receber("offs")
    let dados = onze.filter(i => i.suite == suite)
    let id = dados[0].id
    let data = 'hora='+ hora_atual_segundos()+ '&tipo='+ status+ '&id=' + id
    alterar(`http://${RAIZ}/suits/php/suites/editarreiniciar.php`, data)
}

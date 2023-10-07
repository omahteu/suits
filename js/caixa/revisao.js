import salvar from "../olivia/salva.js"
import {RAIZ} from "../raiz.js"

export default function envia_dados_revisao(caixa, data, hora, suite, camareira, motivo) {
    var dados = 'caixa='+ caixa+ '&data='+ data+ '&hora='+ hora+ '&suite='+ suite+ '&camareira='+ camareira + '&motivo=' + motivo
    salvar(`http://${RAIZ}/suits/php/suites/dadosrevisao.php`, dados)
}
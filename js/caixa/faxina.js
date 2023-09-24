// import link from "../setup/index.js"
import salvar from "../olivia/salva.js"
import { RAIZ } from "../raiz.js"

export default function envia_dados_faxina(caixa, data, hora, suite, duracao, camareira) {
    var dados = 'caixa'+ caixa+ '&data='+ data+ '&hora='+ hora+ '&suite='+ suite+ '&tempo='+ duracao+ '&camareira='+ camareira
    salvar(`http://${RAIZ}/suits/php/suites/dadosfaxina.php`, dados)
}

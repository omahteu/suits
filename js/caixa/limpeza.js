// import link from "../setup/index.js"
import salvar from "../olivia/salva.js"

export default function envia_dados_limpeza(caixa, data, hora, suite, tempo, camareira) {
    var dados = 'caixa='+ caixa+ '&data='+ data+ '&hora='+ hora+ '&suite='+ suite+ '&tempo='+ tempo+ '&camareira='+ camareira
    salvar(`http://${RAIZ}/suits/php/suites/dadoslimpeza.php`, dados)
}

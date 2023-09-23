import link from "../../../setup/index.js"
import salvar from "../../../olivia/salva.js"
import formatarData from "../../../geradores/data_formatada.js"
import { RAIZ } from "../../../raiz.js"

export default async function registraLimiteTroca(suite, modo, tipo) {

    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/tempos.php`)
    const rs = await rq.json()
    if (rs["dados"]) {
        const tempoTroca = rs["dados"][0].trocaTempo
        const data = new Date()
        data.setMinutes(data.getMinutes() + parseInt(tempoTroca))
        let dados = 'suite='+ suite+ '&modo='+ modo+ '&tipo='+ tipo+ '&horario='+ String(formatarData(data))
        salvar(`http://${RAIZ}/suits/php/suites/limitetroca.php`, dados, false, "", false, "")
    }

}


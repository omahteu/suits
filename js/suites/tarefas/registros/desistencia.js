// import link from "../../../setup/index.js"
import salvar from "../../../olivia/salva.js"
import formatarData from "../../../geradores/data_formatada.js"
import { RAIZ } from "../../../raiz.js"

export default async function registraLimiteDesistencia(suite, modo, tipo) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/tempos.php`)
    const rs = await rq.json()
    if (rs["sstatus"]) {
        rs["dados"].forEach(e => {
            const tempoDesistencia = e[0].desistenciaTempo
            const data = new Date
            data.setMinutes(data.getMinutes() + parseInt(tempoDesistencia))
            let dados = 'suite='+ suite+ '&modo='+ modo+ '&tipo='+ tipo+ '&horario='+ String(formatarData(data))
            salvar(`http://${RAIZ}/suits/php/suites/limitedes.php`, dados, false, "", false, "")
        });
    }
}

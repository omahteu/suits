import link from "../../../setup/index.js"
import salvar from "../../../olivia/salva.js"
import formatarData from "../../../geradores/data_formatada.js"


export default async function registraLimiteLimpeza(suite, modo, tipo) {
    const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/tempos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            const tempoLimpeza = e[0].limpezaTempo
            const data = new Date()
            data.setMinutes(data.getMinutes() + parseInt(tempoLimpeza))
            let dados = 'suite='+ suite+ '&modo='+ modo+ '&tipo='+ tipo+ '&horario='+ String(formatarData(data))
            salvar(`http://${RAIZ}/suits/php/suites/limitedes.php`, dados, false, "", false, "")
        });
    }
}

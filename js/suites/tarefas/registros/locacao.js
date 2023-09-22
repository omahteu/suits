import link from "../../../setup/index.js"
import salvar from "../../../olivia/salva.js"
import formatarData from "../../../geradores/data_formatada.js"

export default function registraLimiteTroca(suite, modo, tipo) {
    $.get(link[19], e => {
        const tempoTroca = e[0].trocaTempo
        const data = new Date()
        data.setMinutes(data.getMinutes() + parseInt(tempoTroca))
        let dados = { suite: suite, modo: modo, tipo: tipo, horario: String(formatarData(data)) }
        salvar(link[34], dados, false, "", false, "")
    })
}


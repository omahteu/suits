import link from "../../../setup/index.js"
import salvar from "../../../olivia/salva.js"
import formatarData from "../../../geradores/data_formatada.js"

export default function registraLimiteDesistencia(suite, modo, tipo) {
    $.get(link[19], e => {
        const tempoDesistencia = e[0].desistenciaTempo
        const data = new Date
        data.setMinutes(data.getMinutes() + parseInt(tempoDesistencia))
        let dados = { suite: suite, modo: modo, tipo: tipo, horario: String(formatarData(data)) }
        salvar(link[34], dados, false, "", false, "")
    })
}

import salvar from "../../../olivia/salva.js"
import formatarData from "../../../geradores/data_formatada.js"
import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function registraLimiteTroca(suite, modo, tipo) {
    const url = make_url("suites/show", "tempos.php")
    fazerRequisicaoAjax(url, "GET", null, function(response) {
        const data = JSON.parse(response)
        if (data.status) {
            const tempoTroca = data.dados[0].trocaTempo
            const data = new Date()
            data.setMinutes(data.getMinutes() + parseInt(tempoTroca))
            let dados = 'suite='+ suite+ '&modo='+ modo+ '&tipo='+ tipo+ '&horario='+ String(formatarData(data))
            // salvar(`http://${RAIZ}/suits/php/suites/limitetroca.php`, dados, false, "", false, "")
        }
    }, function(error) {
        console.log(error)
    })
}


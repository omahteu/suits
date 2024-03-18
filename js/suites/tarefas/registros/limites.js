import { RAIZ } from "../../../raiz.js"
import formatarData from "../../../geradores/data_formatada.js"
import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export async function limited(url, tt, suite, modo, tipo) {
    const uri = make_url("somelier", "main.php")

    fazerRequisicaoAjax(uri, "POST", {tabela: "tempo"}, function(response) {
        const data = JSON.parse(response)
        if (data.status) {
            switch (tt) {
                case 'desistenciaTempo':
                    var tempo = data.dados[0].desistenciaTempo
                    break;
    
                case 'faxinaTempo':
                    var tempo = data.dados[0].faxinaTempo
                    break;
    
                case 'limpezaTempo':
                    var tempo = data.dados[0].limpezaTempo
                    break;
    
                case 'manutencaoTempo':
                    var tempo = data.dados[0].manutencaoTempo
                    break;
    
                case 'trocaTempo':
                    var tempo = data.dados[0].trocaTempo
                    break;
    
                case 'revisaoTempo':
                    var tempo = data.dados[0].revisaoTempo
                    break;
    
                default:
                    break;
            }
            const data = new Date
            data.setMinutes(data.getMinutes() + parseInt(tempo))

            var dados = "suite=" + suite + "&modo=" + modo + "&tipo=" + tipo + "&horario=" + String(formatarData(data));
   
            fazerRequisicaoAjax(url, "POST", dados, function(response) {
                console.log(response)
            }, function(error) {
                console.error(error)
            })
        }
    }, function(error) {
        console.error(error)
    })
}

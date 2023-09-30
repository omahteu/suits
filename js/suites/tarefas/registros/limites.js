import { RAIZ } from "../../../raiz.js"
import formatarData from "../../../geradores/data_formatada.js"

export async function limited(url, tt, suite, modo, tipo) {




    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/tempos.php`)
    const rs = await rq.json()
    if (rs["status"]) {

        switch (tt) {
            case 'desistenciaTempo':
                var tempo = rs["dados"][0].desistenciaTempo
                break;

            case 'faxinaTempo':
                var tempo = rs["dados"][0].faxinaTempo
                break;

            case 'limpezaTempo':
                var tempo = rs["dados"][0].limpezaTempo
                break;

            case 'manutencaoTempo':
                var tempo = rs["dados"][0].manutencaoTempo
                break;

            case 'trocaTempo':
                var tempo = rs["dados"][0].trocaTempo
                break;
        
            default:
                break;
        }
        
        const data = new Date
        data.setMinutes(data.getMinutes() + parseInt(tempo))

        var xhr = new XMLHttpRequest();

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                //console.log(xhr.responseText);
            }
        };

        var dados = "suite=" + suite + "&modo=" + modo + "&tipo=" + tipo + "&horario=" + String(formatarData(data));
        xhr.send(dados);
    }
}

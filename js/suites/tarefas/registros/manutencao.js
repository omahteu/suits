// import link from "../../../setup/index.js"
// import salvar from "../../../olivia/salva.js"
import formatarData from "../../../geradores/data_formatada.js"
import {RAIZ} from "../../../raiz.js"

// export function registraLimiteManutencao(suite, modo, tipo) {
//     $.get(link[19], (e) => {
//         const tempoManutencao = e[0].manutencaoTempo
//         const data = new Date
//         data.setMinutes(data.getMinutes() + parseInt(tempoManutencao))
//         let dados = { suite: suite, modo: modo, tipo: tipo, horario: String(formatarData(data)) }
//         salvar(link[34], dados, false, "", false, "")
//     })
// }


export async function registraLimiteManutencao(suite, modo, tipo) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/tempos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        const tempoManutencao = rs["dados"][0].manutencaoTempo
        const data = new Date
        data.setMinutes(data.getMinutes() + parseInt(tempoManutencao))

        var xhr = new XMLHttpRequest();
        var url = `http://${RAIZ}/suits/php/suites/limitemanutencao.php`;

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // A resposta do PHP pode ser manipulada aqui (se necessário)
                console.log(xhr.responseText);
            }
        };

        var dados = "suite=" + suite + "&modo=" + modo + "&tipo=" + tipo + "&horario=" + String(formatarData(data));
        xhr.send(dados);
    }
}

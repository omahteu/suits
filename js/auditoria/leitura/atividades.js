import link from "../../setup/index.js"
import { dateToEN } from "../../geradores/data.js"

export default async function dados_atividade(user, inicio, fim) {
    const requisicao = await fetch(link[0])
    const resposta = await requisicao.json()
    var prontuario = document.getElementById("dados_atividades")
    prontuario.innerHTML = ""
    let ficha = resposta.filter(e => e.nome == user)
    ficha.forEach(e => {
        var sum = 0
        sum += e.tempo
        var dts = dateToEN(e.data)
        var datas = new Date(dts)
        var date1 = new Date(inicio)
        var date2 = new Date(fim)
        if (datas > date1 && datas < date2) {
            prontuario.innerHTML += `<tr>` +
                                        `<td>${e.nome}</td>` +
                                        `<td>${e.data}</td>` +
                                        `<td>${e.tempo}</td>` +
                                    `</tr>`
        }
    });
}

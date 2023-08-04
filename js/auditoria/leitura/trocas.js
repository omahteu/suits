import link from "../../setup/index.js"
import { dateToEN } from "../../geradores/data.js"

export default async function dados_troca(user, inicio, fim) {
    const requisicao = await fetch(link[26])
    const resposta = await requisicao.json()
    var prontuario = document.getElementById("dados_trocas")
    prontuario.innerHTML = ""
    let ficha = resposta.filter(e => e.caixa == user)
    ficha.forEach(e => {
        var dts = dateToEN(e.data)
        var datas = new Date(dts)
        var date1 = new Date(inicio)
        var date2 = new Date(fim)
        if (datas > date1 && datas < date2) {
            prontuario.innerHTML += `<tr>` +
                                        `<td>${e.caixa}</td>` +
                                        `<td>${e.data}</td>` +
                                        `<td>${e.hora}</td>` +
                                        `<td>${e.antigo}</td>` +
                                        `<td>${e.novo}</td>` +
                                    `</tr>`
        }
    });
}

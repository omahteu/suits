// import link from "../../setup/index.js"
import { RAIZ } from "../../raiz.js"

export default async function _historico() {
    try {
        const rq = await fetch(`http://${RAIZ}/suits/php/caixa/show/caixa.php`)
        const rs = await rq.json()
        if (rs['status']) {
            let historico = document.getElementById("tab_historico")
            historico.innerHTML = ""
            rs['dados'].forEach(e => {
                historico.innerHTML += '<tr>'+
                                            `<td>${e.data}</td>`+
                                            `<td>${e.entrada}</td>`+
                                            `<td>${e.usuario}</td>`+
                                            `<td>${e.fundo}</td>`+
                                            `<td>${e.total}</td>`+
                                            `<td>${e.saida}</td>`+
                                        '</tr>'
            })
        }

    } catch (error) {
        sessionStorage.setItem("historico_usuarios.js", `[LOGS] | ${error}`)
    }
}

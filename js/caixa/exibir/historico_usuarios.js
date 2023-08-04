import link from "../../setup/index.js"

export default async function _historico() {
    try {
        const rq = await fetch(link[2])
        const rs = await rq.json()
        let historico = document.getElementById("tab_historico")
        historico.innerHTML = ""
        rs.forEach(e => {
            historico.innerHTML += '<tr>'+
                                        `<td>${e.data}</td>`+
                                        `<td>${e.entrada}</td>`+
                                        `<td>${e.usuario}</td>`+
                                        `<td>${e.fundo}</td>`+
                                        `<td>${e.total}</td>`+
                                        `<td>${e.saida}</td>`+
                                    '</tr>'
        })
    } catch (error) {
        sessionStorage.setItem("historico_usuarios.js", `[LOGS] | ${error}`)
    }
}

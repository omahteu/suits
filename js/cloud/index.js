import {RAIZ} from "../raiz.js"


$(window).on("load", function() {
    autos()
})

async function autos() {
    const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/automacoes.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        console.log(rs['dados'])
        let tabs = document.getElementById("cloud")
        tabs.innerHTML = ""
        rs["dados"].forEach(e => {
            tabs.innerHTML += `
            <tr>
                <td>${e.placa}</td>
                <td>${e.rele}</td>
                <td>${e.suite}</td>
                <td>${e.estado == "1" ? "Ligado" : "Desligado"}</td>
                <td>
                    <button type="button" data-toggle="${e.id},${e.suite}" class="btn btn-primary" id="menu_cloud">Alterar</button>
                </td>
            </tr>
            `
        });
    }
}

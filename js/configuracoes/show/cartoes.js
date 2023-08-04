import {url} from "../../../urlbase.js"

$(document).on("click", "#aba_cartoes", function() {
    credito()
    setTimeout(() => {
        debito()
    }, 500);
})

async function credito() {
    const rq = await fetch(`${url}suits/php/configuracoes/show/credito.php`)
    const rs = await rq.json()
    if(rs["status"]) {
        let tcredito = document.getElementById("tabela_cartoes")
        tcredito.innerHTML = ""
        rs["dados"].forEach(e => {
            tcredito.innerHTML += `
                <tr>
                    <td value="${e.id}">Crédito</td>
                    <td>${e.bandeira}</td>
                    <td>${e.porcentagem}</td>
                    <td>
                        <button type="button" class="btn btn-primary" id="editar_cartoes" value="${e.id},c">Editar</button>
                    </td>
                </tr>
            `
        });
    }
}

async function debito() {
    const rq = await fetch(`${url}suits/php/configuracoes/show/debito.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let tdebito = document.getElementById("tabela_cartoes")
        rs["dados"].forEach(e => {
            tdebito.innerHTML += `
                <tr>
                    <td value="${e.id}">Débito</td>
                    <td>${e.bandeira}</td>
                    <td>${e.porcentagem}</td>
                    <td>
                        <button type="button" class="btn btn-primary sumir" id="editar_cartoes" value="${e.id},d">Editar</button>
                    </td>
                </tr>
            `
        });
    }
}

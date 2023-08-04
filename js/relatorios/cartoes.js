import {url} from "../../urlbase.js"

$(document).on("click", "#tab_cartoes", function(){
    relatorioCartoes()
})

var bandeiras = {
    1: "American Express",
    2: "Elo",
    3: "Hipercard",
    4: "Mastercard",
    5: "Visa"
}

async function relatorioCartoes(){
    const rq1 = await fetch(`${url}suits/php/configuracoes/show/credito.php`)
    const rq2 = await fetch(`${url}suits/php/configuracoes/show/debito.php`)
    const rs1 = await rq1.json()
    const rs2 = await rq2.json()

    if (rs1["status"] && rs2["status"]) {
        var tabela = document.getElementById("tabelaRelatorioCartoes")
        tabela.innerHTML = ""
        rs1["dados"].forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>Crédito</td>
                    <td>${bandeiras[e.bandeira]}</td>
                    <td>${e.porcentagem}%</td>
                </tr>
            `
        })
        setTimeout(() => {
            rs2["dados"].forEach(e => {
                tabela.innerHTML += `
                    <tr>
                        <td>Débito</td>
                        <td>${bandeiras[e.bandeira]}</td>
                        <td>${e.porcentagem}%</td>
                    </tr>
                `
            })
        }, 500);
    }
}

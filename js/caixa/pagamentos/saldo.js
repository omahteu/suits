$(window).on("load", function () {
    saldo()
})

async function saldo() {
    const rq = await fetch("http://192.168.11.10/suits/php/caixa/show/receita.php")
    const rs = await rq.json()
    if (rs["status"]) {
        const valor = parseFloat(rs["dados"][0].caixa)
        let tab = document.getElementById("tab_saldo")
        tab.innerHTML = ""

        tab.innerHTML += `
            <tr>
                <td id="saldo_caixa">${valor.toFixed(2)}</td>
            </tr>
        `
    }
}

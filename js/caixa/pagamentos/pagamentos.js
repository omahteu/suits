// 30 | Receita | Pagamentos - Sangria

// 1 | Dinheiro
// 2 | PIX
// 3 | Débito
// 4 | Crédito


$(window).on("load", function () {
    todos_pagamentos()
})

async function todos_pagamentos() {
    const rq = await fetch("http://192.168.11.10/suits/php/caixa/show/pagamentos.php")
    const rs = await rq.json()
    if (rs["status"]) {
        dinheiro(rs["dados"])
        pix(rs["dados"])
        debito(rs["dados"])
        credito(rs["dados"])
    }
}

function dinheiro(e) {
    let real = e.filter(i => i.forma == "1")
    let tabs = document.getElementById("lista_dinheiro")
    tabs.innerHTML = ""
    real.forEach(i => {
        tabs.innerHTML += `
            <tr>
                <td>${i.valor}</td>
            </tr>
        `
    });
}

function pix(e) {
    let pixs = e.filter(i => i.forma == "2")
    let tabs = document.getElementById("lista_pix")
    tabs.innerHTML = ""
    pixs.forEach(i => {
        tabs.innerHTML += `
        <tr>
            <td>${i.valor}</td>
        </tr>
        `
    });
}

function debito(e) {
    var debito = e.filter(i => i.forma == "3")
    let tab = document.getElementById("tab_debito")
    tab.innerHTML = ""
    debito.forEach(i => {
        tab.innerHTML += '<tr>' +
            `<td>${'i.nota'}</td>` +
            `<td>${parseFloat(i.valor).toFixed(2)}</td>` +
            '</tr>'
    })
}

function credito(e) {
    var credito = e.filter(i => i.forma == "4")
    let tab = document.getElementById("tab_credito")
    tab.innerHTML = ""
    credito.forEach(i => {
        tab.innerHTML += '<tr>' +
            `<td>${'i.nota'}</td>` +
            `<td>${parseFloat(i.valor).toFixed(2)}</td>` +
            `<td>${i.parcela}</td>` +
            '</tr>'
    })
}

// 30 | Receita | Pagamentos - Sangria

// 1 | Dinheiro
// 2 | PIX
// 3 | Débito
// 4 | Crédito

import {RAIZ} from "../../raiz.js"


export async function todos_pagamentos() {
    const rq = await fetch(`http://${RAIZ}/suits/php/caixa/show/pagamentos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        dinheiro(rs["dados"])
        pix(rs["dados"])
        debito(rs["dados"])
        credito(rs["dados"])
    }
}

function dinheiro(e) {
    let soma = 0
    let usuario = localStorage.getItem('nome')
    let real = e.filter(i => i.forma == "Dinheiro" && i.usuario == usuario)
    let tabs = document.getElementById("lista_dinheiro")
    tabs.innerHTML = ""
    real.forEach(i => {

        tabs.innerHTML += `
            <tr>
                <td>${i.valor}</td>
                <td>${i.data}</td>
                <td>${i.usuario}</td>
            </tr>
        `
        const valores = i.valor;
        soma += parseFloat(valores);
    });
    localStorage.setItem("dinheiro", soma)
}

function pix(e) {
    let soma = 0
    let usuario = localStorage.getItem('nome')
    let pixs = e.filter(i => i.forma == "PIX" && i.usuario == usuario)
    let tabs = document.getElementById("lista_pix")
    tabs.innerHTML = ""
    pixs.forEach(i => {
        tabs.innerHTML += `
            <tr>
                <td>${i.valor}</td>
                <td>${i.data}</td>
                <td>${i.usuario}</td>
            </tr>
        `
        const valores = i.valor;
        soma += parseFloat(valores);
    });
    console.log(soma)
    localStorage.setItem("pix", soma)
}

function debito(e) {
    let soma = 0
    let usuario = localStorage.getItem('nome')
    var debito = e.filter(i => i.forma == "Débito Mastercard - " && i.usuario == usuario)
    let tab = document.getElementById("tab_debito")
    tab.innerHTML = ""
    debito.forEach(i => {
        tab.innerHTML += `
            <tr>
                <td>${i.nota}</td>
                <td>${parseFloat(i.valor).toFixed(2)}</td>
                <td>${i.data}</td>
                <td>${i.usuario}</td>
            </tr>
        `
        const valores = i.valor;
        soma += parseFloat(valores);
    })
    localStorage.setItem("debito", soma)
}

function credito(e) {
    let soma = 0
    let usuario = localStorage.getItem('nome')
    var credito = e.filter(i => i.forma == "Crédito Mastercard -" && i.usuario == usuario)
    let tab = document.getElementById("tab_credito")
    tab.innerHTML = ""
    credito.forEach(i => {
        tab.innerHTML += `
            <tr>
                <td>${i.nota}</td>
                <td>${i.valor}</td>
                <td>${i.parcelas}</td>
                <td>${i.data}</td>
                <td>${i.usuario}</td>
            </tr>
        `
        const valores = i.valor;
        soma += parseFloat(valores);
    })
    localStorage.setItem("credito", soma)
}

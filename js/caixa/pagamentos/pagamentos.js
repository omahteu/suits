// 30 | Receita | Pagamentos - Sangria

// 1 | Dinheiro
// 2 | PIX
// 3 | Débito
// 4 | Crédito

import {RAIZ} from "../../raiz.js"


export async function todos_pagamentos() {
    let soma = 0
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
    });
}

function pix(e) {
    let pixs = e.filter(i => i.forma == "PIX")
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
    });
}

function debito(e) {
    var debito = e.filter(i => i.forma == "Débito Mastercard - ")
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
    })
}

function credito(e) {
    var credito = e.filter(i => i.forma == "Crédito Mastercard -")
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
    })
}

// 30 | Receita | Pagamentos - Sangria

// 1 | Dinheiro
// 2 | PIX
// 3 | Débito
// 4 | Crédito

import { RAIZ } from "../../raiz.js"
import { data_atual } from "../../geradores/data.js"


export async function todos_pagamentos() {
    const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/ocupacoes.php`)
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

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY');

    const limiteHora = moment("19:00:00", "HH:mm:ss")
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    let real = e.filter(
        i => i.forma == "Dinheiro" &&
            i.usuario == usuario
    )

    let tabs = document.getElementById("lista_dinheiro")
    tabs.innerHTML = ""

    real.forEach(i => {
        if (
            moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
            moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
        ) {
            if (
                moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                moment(i.entrada, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss")) ||
                moment(e.entrada, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
            ) {
                tabs.innerHTML += `
                    <tr>
                        <td>${i.suite}</td>
                        <td>${i.data}</td>
                        <td>${i.entrada}</td>
                        <td>${i.saida}</td>
                        <td>${i.total}</td>
                        <td>${i.usuario}</td>
                    </tr>
                `
                const valores = i.total;
                soma += parseFloat(valores);
            } else if (
                moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
            ) {
                tabs.innerHTML += `
                    <tr>
                        <td>${i.suite}</td>
                        <td>${i.data}</td>
                        <td>${i.entrada}</td>
                        <td>${i.saida}</td>
                        <td>${i.total}</td>
                        <td>${i.usuario}</td>
                    </tr>
                `
                const valores = i.total;
                soma += parseFloat(valores);
            }
        } else {
            console.log('e');
        }
    });
    localStorage.setItem("dinheiro", soma)
}

function pix(e) {
    let soma = 0
    let usuario = localStorage.getItem('nome')

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY')

    const limiteHora = moment("19:00:00", "HH:mm:ss")
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    let pixs = e.filter(
        i => String(i.forma).trim() == "PIX" &&
            i.usuario == usuario
    )

    let tabs = document.getElementById("lista_pix")
    tabs.innerHTML = ""

    pixs.forEach(i => {
        if (
            moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
            moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
        ) {

            if (
                moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                moment(i.entrada, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss")) ||
                moment(e.entrada, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
            ) {
                tabs.innerHTML += `
                <tr>
                        <td>${i.suite}</td>
                        <td>${i.data}</td>
                        <td>${i.entrada}</td>
                        <td>${i.saida}</td>
                        <td>${i.total}</td>
                        <td>${i.usuario}</td>
                    </tr>
                `
                const valores = i.total;
                soma += parseFloat(valores);
            } else if (
                moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
            ) {
                tabs.innerHTML += `
                <tr>
                        <td>${i.suite}</td>
                        <td>${i.data}</td>
                        <td>${i.entrada}</td>
                        <td>${i.saida}</td>
                        <td>${i.total}</td>
                        <td>${i.usuario}</td>
                    </tr>
                `
                const valores = i.total;
                soma += parseFloat(valores);
            }
        } else {
            console.log(e);
        }
    });
    localStorage.setItem("pix", soma)
}

function debito(e) {
    let soma = 0
    let usuario = localStorage.getItem('nome')

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY');

    const limiteHora = moment("19:00:00", "HH:mm:ss")
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    var debito = e.filter(
        i => i.forma == "Débito Mastercard - 4%" &&
            i.usuario == usuario
    )

    let tab = document.getElementById("tab_debito")
    tab.innerHTML = ""

    debito.forEach(i => {

        if (
            moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
            moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
        ) {
            if (
                moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                moment(i.entrada, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss")) ||
                moment(e.entrada, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
            ) {
                tab.innerHTML += `
                <tr>
                        <td>${i.suite}</td>
                        <td>${i.data}</td>
                        <td>${i.entrada}</td>
                        <td>${i.saida}</td>
                        <td>${i.total}</td>
                        <td>${i.usuario}</td>
                    </tr>
                `
                const valores = i.total;
                soma += parseFloat(valores);
            } else if (
                moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
            ) {
                tab.innerHTML += `
                <tr>
                        <td>${i.suite}</td>
                        <td>${i.data}</td>
                        <td>${i.entrada}</td>
                        <td>${i.saida}</td>
                        <td>${i.total}</td>
                        <td>${i.usuario}</td>
                    </tr>
                `
                const valores = i.total;
                soma += parseFloat(valores);
            }
        } else {
            console.log('e');
        }
    })
    localStorage.setItem("debito", soma)
}

function credito(e) {
    let soma = 0
    let usuario = localStorage.getItem('nome')

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY')

    const limiteHora = moment("19:00:00", "HH:mm:ss")
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    var credito = e.filter(
        q => q.forma == "Crédito Mastercard - 4%" &&
            q.usuario == usuario
    )

    let tab = document.getElementById("tab_credito")
    tab.innerHTML = ""

    credito.forEach(i => {
        if (
            moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
            moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
        ) {
            if (
                moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                moment(i.entrada, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss")) ||
                moment(e.entrada, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
            ) {
                tab.innerHTML += `
                    <tr>
                        <td>${i.suite}</td>
                        <td>${i.data}</td>
                        <td>${i.entrada}</td>
                        <td>${i.saida}</td>
                        <td>${i.total}</td>
                        <td>${i.usuario}</td>
                    </tr>
                `
                const valores = i.total;
                soma += parseFloat(valores);
            } else if (
                moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
            ) {
                tab.innerHTML += `
                    <tr>
                        <td>${i.suite}</td>
                        <td>${i.data}</td>
                        <td>${i.entrada}</td>
                        <td>${i.saida}</td>
                        <td>${i.total}</td>
                        <td>${i.usuario}</td>
                    </tr>
                `
                const valores = i.total;
                soma += parseFloat(valores);
            }
        } else {
            console.log('e');
        }
    })
    localStorage.setItem("credito", soma)
}

// 30 | Receita | Pagamentos - Sangria

// 1 | Dinheiro
// 2 | PIX
// 3 | Débito
// 4 | Crédito

import { RAIZ } from "../../raiz.js"
import { data_atual } from "../../geradores/data.js"


export async function todos_pagamentos() {
    let usuario = localStorage.getItem('nome')
    const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/ocupacoes.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dadosUsuario = rs["dados"].filter(it => it.usuario == usuario)
        dinheiro(dadosUsuario)
        pix(dadosUsuario)
        debito(dadosUsuario)
        credito(dadosUsuario)
    }
}

function dinheiro(e) {
    let soma = 0
    let operacao = localStorage.getItem('operacao')

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY');

    const limiteHora = moment("19:00:00", "HH:mm:ss")
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    let real = e.filter(i => i.forma == "Dinheiro")

    let tabs = document.getElementById("lista_dinheiro")
    tabs.innerHTML = ""

    operantisModus(real, operacao, ontem, limiteorra, limiteHora)

    localStorage.setItem("dinheiro", soma)
}

function pix(e) {
    let soma = 0
    let operacao = localStorage.getItem('operacao')

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY')

    const limiteHora = moment("19:00:00", "HH:mm:ss")
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    let pixs = e.filter(i => String(i.forma).trim() == "PIX")

    let tabs = document.getElementById("lista_pix")
    tabs.innerHTML = ""

    // pixs.forEach(i => {
    //     if (
    //         moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
    //         moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
    //     ) {

    //         if (
    //             moment(i.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
    //             moment(i.saida, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss"))
    //         ) {
    //             tabs.innerHTML += `
    //             <tr>
    //                     <td>${i.suite}</td>
    //                     <td>${i.data}</td>
    //                     <td>${i.entrada}</td>
    //                     <td>${i.saida}</td>
    //                     <td>${i.total}</td>
    //                     <td>${i.usuario}</td>
    //                 </tr>
    //             `
    //             const valores = i.total;
    //             soma += parseFloat(valores);
    //         } else if (
    //             moment(i.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') &&
    //             moment(i.saida, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
    //         ) {
    //             tabs.innerHTML += `
    //             <tr>
    //                     <td>${i.suite}</td>
    //                     <td>${i.data}</td>
    //                     <td>${i.entrada}</td>
    //                     <td>${i.saida}</td>
    //                     <td>${i.total}</td>
    //                     <td>${i.usuario}</td>
    //                 </tr>
    //             `
    //             const valores = i.total;
    //             soma += parseFloat(valores);
    //         }
    //     } else {
    //         console.log(e);
    //     }
    // });

    operantisModusPix(pixs, operacao, ontem, limiteorra, limiteHora)

    localStorage.setItem("pix", soma)
}

function debito(e) {
    let soma = 0
    let operacao = localStorage.getItem('operacao')

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY');

    const limiteHora = moment("19:00:00", "HH:mm:ss")
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    var debito = e.filter(i => i.forma == "Débito Mastercard - 4%")

    let tab = document.getElementById("tab_debito")
    tab.innerHTML = ""

    operantisModusDebito(debito, operacao, ontem, limiteorra, limiteHora)

    localStorage.setItem("debito", soma)
}

function credito(e) {
    let soma = 0
    let operacao = localStorage.getItem('operacao')

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY')

    const limiteHora = moment("19:00:00", "HH:mm:ss")
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    var credito = e.filter(q => q.forma == "Crédito Mastercard - 4%")

    let tab = document.getElementById("tab_credito")
    tab.innerHTML = ""

    operantisModusCredito(credito, operacao, ontem, limiteorra, limiteHora)

    localStorage.setItem("credito", soma)
}

function operantisModus(dados, operacao, ontem, limiteorra, limiteHora) {
    let soma = 0

    let tabs = document.getElementById("lista_dinheiro")
    tabs.innerHTML = ''
    dados.forEach(e => {
        if (operacao == '1') {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
                moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
            ) {
                if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss"))
                ) {
                    tabs.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                    const valores = e.total;
                    soma += parseFloat(valores);
                } else if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
                ) {
                    tabs.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                    const valores = e.total;
                    soma += parseFloat(valores);
                }
            }
        } else {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
            ) {
                tabs.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                const valores = e.total;
                soma += parseFloat(valores);
            }
        }
    })


}

function operantisModusPix(dados, operacao, ontem, limiteorra, limiteHora) {
    let soma = 0

    let tabs = document.getElementById("lista_pix")
    tabs.innerHTML = ''
    dados.forEach(e => {
        if (operacao == '1') {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
                moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
            ) {
                if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss"))
                ) {
                    tabs.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                    const valores = e.total;
                    soma += parseFloat(valores);
                } else if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
                ) {
                    tabs.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                    const valores = e.total;
                    soma += parseFloat(valores);
                }
            }
        } else {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
            ) {
                tabs.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                const valores = e.total;
                soma += parseFloat(valores);
            }
        }
    })


}

function operantisModusDebito(dados, operacao, ontem, limiteorra, limiteHora) {
    let soma = 0

    let tab = document.getElementById("tab_debito")
    tab.innerHTML = ''
    dados.forEach(e => {
        if (operacao == '1') {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
                moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
            ) {
                if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss"))
                ) {
                    tab.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                    const valores = e.total;
                    soma += parseFloat(valores);
                } else if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
                ) {
                    tab.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                    const valores = e.total;
                    soma += parseFloat(valores);
                }
            }
        } else {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
            ) {
                tab.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                const valores = e.total;
                soma += parseFloat(valores);
            }
        }
    })


}

function operantisModusCredito(dados, operacao, ontem, limiteorra, limiteHora) {
    let soma = 0

    let tab = document.getElementById("tab_credito")
    tab.innerHTML = ''
    dados.forEach(e => {
        if (operacao == '1') {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
                moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
            ) {
                if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss"))
                ) {
                    tab.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                    const valores = e.total;
                    soma += parseFloat(valores);
                } else if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
                ) {
                    tab.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                    const valores = e.total;
                    soma += parseFloat(valores);
                }
            }
        } else {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
            ) {
                tab.innerHTML += `
                    <tr>
                        <td>${e.suite}</td>
                        <td>${e.data}</td>
                        <td>${e.entrada}</td>
                        <td>${e.saida}</td>
                        <td>${e.total}</td>
                        <td>${e.usuario}</td>
                    </tr>
                `
                const valores = e.total;
                soma += parseFloat(valores);
            }
        }
    })


}

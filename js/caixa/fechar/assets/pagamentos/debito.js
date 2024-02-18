export default function processarDadosDebito (responseData) {
    const data = JSON.parse(responseData)

    if (data.status) {
        exibirDadosDebito(data.dados)
    } else {
        tratarDebitoVazio()
    }
}

function exibirDadosDebito (debitoData) {
    const debitoTable = document.getElementById("tab_debito")
    debitoTable.innerHTML = ""

    let totalAmount = 0

    debitoData.forEach(entry => {
        debitoTable.innerHTML += criarLinhaTabela(entry)

        const entryTotal = parseFloat(entry.total)
        totalAmount += isNaN(entryTotal) ? 0 : entryTotal
    });

    localStorage.setItem("debito", totalAmount.toFixed(2))
}

function criarLinhaTabela(entry) {
    return `
        <tr>
            <td>${entry.suite}</td>
            <td>${entry.data}</td>
            <td>${entry.entrada}</td>
            <td>${entry.saida}</td>
            <td>${entry.total}</td>
            <td>${entry.usuario}</td>
        </tr>
    `
}

function tratarDebitoVazio() {
    const debitoTable = document.getElementById("tab_debito")
    debitoTable.innerHTML = ""

    debitoTable.innerHTML += criarLinhaTabelaVazia()

    localStorage.setItem("debito", "0")
}

function criarLinhaTabelaVazia() {
    const data = "0"

    return `
        <tr>
            <td>${data}</td>
            <td>${data}</td>
            <td>${data}</td>
            <td>${data}</td>
            <td>${data}</td>
            <td>${data}</td>
        </tr>
    `
}

export default function processarDadosPix(responseData) {
    const data = JSON.parse(responseData)
    
    if (data.status) {
        exibirDadosPix(data.dados)
    } else {
        tratarPixVazio()
    }
}

function exibirDadosPix(pixData) {
    const pixTable = document.getElementById("lista_pix")
    pixTable.innerHTML = ""

    let totalAmount = 0

    pixData.forEach(entry => {
        pixTable.innerHTML += criarLinhaTabela(entry)

        const entryTotal = parseFloat(entry.total)
        totalAmount += isNaN(entryTotal) ? 0 : entryTotal
    });

    localStorage.setItem("pix", totalAmount.toFixed(2))
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

function tratarPixVazio () {
    const pixTable = document.getElementById("lista_pix")
    pixTable.innerHTML = ""

    pixTable.innerHTML += criarLinhaTabelaVazia()

    localStorage.setItem("pix", "0")
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

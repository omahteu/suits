export default function processarDadosDinheiro(responseData) {
    const data = JSON.parse(responseData);
    
    if (data.status) {
        exibirDadosDinheiro(data.dados);
    } else {
        tratarDinheiroVazio();
    }
}

function exibirDadosDinheiro(dinheiroData) {
    const dinheiroTable = document.getElementById("lista_dinheiro");
    dinheiroTable.innerHTML = "";

    let totalAmount = 0;

    dinheiroData.forEach(entry => {
        dinheiroTable.innerHTML += criarLinhaTabela(entry);

        const entryTotal = parseFloat(entry.total);
        totalAmount += isNaN(entryTotal) ? 0 : entryTotal;
    });

    localStorage.setItem("dinheiro", totalAmount.toFixed(2));
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
    `;
}

function tratarDinheiroVazio() {
    const dinheiroTable = document.getElementById("lista_dinheiro");
    dinheiroTable.innerHTML = "";

    dinheiroTable.innerHTML += criarLinhaTabelaVazia();

    localStorage.setItem("dinheiro", '0');
}

function criarLinhaTabelaVazia() {
    const data = '0';

    return `
        <tr>
            <td>${data}</td>
            <td>${data}</td>
            <td>${data}</td>
            <td>${data}</td>
            <td>${data}</td>
            <td>${data}</td>
        </tr>
    `;
}

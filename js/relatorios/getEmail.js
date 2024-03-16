// import link from "../setup/index.js"

$(document).ready(function() {
    relatorioEmais()
})

async function relatorioEmais(){
    const resposta = await fetch(link[9])
    const dados = await resposta.json()
    var tabela = document.getElementById('relatorioTabelaEmails')
    tabela.innerHTML = ''
    dados.forEach(e => {
        tabela.innerHTML += '<tr>'+
                                `<td>${e.usuario}</td>`+
                                `<td>${e.senha}</td>`+
                                `<td>${e.smtp}</td>`+
                                `<td>${e.porta}</td>`+
                                `<td>${e.timeout}</td>`+
                                `<td>${e.email_destino}</td>`+
                                `<td>${e.email_contabilidade}</td>`+
                                `<td>${e.autenticacao}</td>`+
                            '</tr>'
    });
}

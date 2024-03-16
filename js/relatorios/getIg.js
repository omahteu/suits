// import link from "../setup/index.js"

$(document).ready(function() {
    relatorioIg()
})

async function relatorioIg(){
    const resposta = await fetch(link[10])
    const dados = await resposta.json()
    var tabela = document.getElementById('relatorioTabelaIgs')
    tabela.innerHTML = ''
    dados.forEach(e => {
        tabela.innerHTML += '<tr>'+
                                `<td>${e.social}</td>`+
                                `<td>${e.fantasia}</td>`+
                                `<td>${e.cnpj}</td>`+
                                `<td>${e.cidade}</td>`+
                                `<td>${e.endereco}</td>`+
                                `<td>${e.numero}</td>`+
                                `<td>${e.bairro}</td>`+
                                `<td>${e.telefone}</td>`+
                                `<td>${e.telefone2}</td>`+
                                `<td>${e.telefone3}</td>`+
                            '</tr>'
    });
}

import link from "../setup/index.js"

$(document).ready(function() {
    buscaCaixa()
})

async function buscaCaixa(){
    const resposta = await fetch(link[2])
    const data = await resposta.json()
    var historicoCaixa = document.getElementById('tabrlaRelatorioQuartos')
    historicoCaixa.innerHTML = ''
    data.forEach(e => {
        historicoCaixa.innerHTML += '<tr>'+
                                        `<td>${e.data}</td>`+
                                        `<td>${e.entrada}</td>`+
                                        `<td>${e.usuario}</td>`+
                                        `<td>${e.fundo}</td>`+
                                        `<td>${e,total}</td>`+
                                        `<td>${e.saida}</td>`+
                                    '</tr>'
    });
}

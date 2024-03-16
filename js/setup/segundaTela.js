

$(document).ready(function(){
    setInterval(() => {
        let dados = JSON.parse(localStorage.getItem("index"))
        let suite = localStorage.getItem("last")

        var tabela = document.getElementById("dados_cliente")
        tabela.innerHTML = ''
        var tabela2 = document.getElementById("dados_cliente_produtos")
        tabela2.innerHTML = ''

        tabela.innerHTML += '<tr>'+
                                `<td>${dados.a1}</td>`+
                                `<td>${dados.a2}</td>`+
                                `<td>${dados.a3}</td>`+
                                `<td>${dados.a4}</td>`+
                                `<td>${dados.a5}</td>`+
                                `<td>${dados.a6}</td>`+
                                `<td>${dados.a7}</td>`+
                                `<td>${dados.a8}</td>`+
                            '</tr>'

        $("#totalgeral").text(dados.a9)

        $.get(link[5], (e) => {
            var dados_comanda = e.filter(i => i.quarto == '1')
            dados_comanda.forEach(x => {
                tabela2.innerHTML += '<tr>'+
                                        `<td>${x.descricao}</td>`+
                                        `<td>${x.quantidade}</td>`+
                                        `<td>${x.valor_unitario}</td>`+
                                        `<td>${x.valor_total}</td>`+
                                    '</tr>'
            })
        })
    }, 1000);
})

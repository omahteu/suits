import {url} from "../../urlbase.js"

$(window).on("load", function() {
    listaOcupacoes()
})

async function listaOcupacoes(){
    const rq = await fetch(`${url}suits/php/home/exibe_ocupacoes.php`)
    const rt = await rq.json()
    if (rt["status"]) {
        var ocupacoes = document.getElementById('tabelaHomeOcupacoes')
        ocupacoes.innerHTML = ''
        rt.forEach(e => {
            ocupacoes.innerHTML += '<tr>'+
                                        `<td>${e.data}</td>`+
                                        `<td>${e.codigo}</td>`+
                                        `<td>${e.quarto}</td>`+
                                        `<td>${e.entrada}</td>`+
                                        `<td>${e.saida}</td>`+
                                        `<td>${e.total}</td>`+
                                    '</tr>'
        });
    }
}

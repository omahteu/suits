import {url} from "../../urlbase.js"

$(window).on("load", function(){
    listaProdutos()
})

async function listaProdutos(){
    const rq = await fetch(`${url}suits/php/home/exibe_produtos.php`)
    const rt = await rq.json()
    if (rt["status"]) {
        var produtos = document.getElementById('tabelaHomeProdutos')
        produtos.innerHTML = ''
        rt.forEach(e => {
            produtos.innerHTML += '<tr>'+
                                        `<td>${e.codigo}</td>`+
                                        `<td>${e.descricao}</td>`+
                                        `<td>${e.valor}</td>`+
                                        `<td>${e.quantidade}</td>`+
                                        `<td>${e.categoria}</td>`+
                                        `<td>${e.data}</td>`+
                                    '</tr>'
        });
    }
}

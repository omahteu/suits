import { RAIZ } from "../raiz.js"

$(window).on("load", function () {
    listaProdutos()
})

async function listaProdutos() {
    const rq = await fetch(`http://${RAIZ}/suits/php/home/exibe_produtos.php`)
    const rt = await rq.json()
    if (rt["status"]) {
        var produtos = document.getElementById('tabelaHomeProdutos')
        produtos.innerHTML = ''
        rt["dados"].forEach(e => {
            produtos.innerHTML += '<tr>' +
                `<td>${e.codigo}</td>` +
                `<td>${e.descricao}</td>` +
                `<td>${e.valorunitario}</td>` +
                `<td>${e.quantidade}</td>` +
                `<td>${e.categoria}</td>` +
                `<td>${e.data}</td>` +
                '</tr>'
        });
    }
}

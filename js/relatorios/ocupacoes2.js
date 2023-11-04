import { RAIZ } from "../raiz.js"

$(window).on("load", function () {
    listaOcupacoes()
})

async function listaOcupacoes() {
    let usuario = localStorage.getItem('nome')
    const rq = await fetch(`http://${RAIZ}/suits/php/home/exibe_ocupacoes.php`)
    const rt = await rq.json()
    if (rt["status"]) {
        let ocupacoesUsuario = rt['dados'].filter(x => x.usuario == usuario)
        var ocupacoes = document.getElementById('tabelaHomeOcupacoes')
        ocupacoes.innerHTML = ''
        ocupacoesUsuario.forEach(e => {
            ocupacoes.innerHTML += '<tr>' +
                `<td>${e.data}</td>` +
                `<td>${e.codigo}</td>` +
                `<td>${e.suite}</td>` +
                `<td>${e.entrada}</td>` +
                `<td>${e.saida}</td>` +
                `<td>${e.total}</td>` +
                '</tr>'
        });
    }
}

import {url} from "../../urlbase.js"

$(document).on("click", "#tab_produtos", function () {
    relatorioProdutos()
})

async function relatorioProdutos() {
    const rq = await fetch(`${url}suits/php/estoque/show/produtos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var tabela = document.getElementById('tabelaEstoque')
        tabela.innerHTML = ''
        rs["dados"].forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>${e.codigo}</td>
                    <td>${e.descricao}</td>
                    <td>${e.valorunitario}</td>
                    <td>${e.quantidade}</td>
                    <td>${e.categoria}</td>
                    <td>${e.data}</td>
                </tr>
            `
        });
    }
}

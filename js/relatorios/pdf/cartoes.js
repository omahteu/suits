import {url} from "../../../urlbase.js"

$(document).on("click", "#p_cartoes", function() {
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Cartões</h1>'+
        "<table border='1'>"+
            "<thead>"+
                "<tr>"+
                    "<th>Bandeira</th>"+
                    "<th>Porcentagem</th>"+
                    "<th>Tipo</th>"+
                "</tr>"+
            "</thead>"
    )
    credito(janela)
    debito(janela)
    janela.document.write("</body>")
    janela.document.write("</html>")
    setTimeout(() => {
        janela.print()
    }, 500);
})

async function credito(janela) {
    const rq = await fetch(`${url}suits/php/configuracoes/show/credito.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${e.bandeira}</td>`+
                        `<td>${e.porcentagem}</td>`+
                        `<td>Crédito</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    }
}

async function debito(janela) {
    const rq = await fetch(`${url}suits/php/configuracoes/show/debito.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${e.bandeira}</td>`+
                        `<td>${e.porcentagem}</td>`+
                        `<td>Débito</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    }
}
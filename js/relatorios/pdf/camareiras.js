import {url} from "../../../urlbase.js"

$(document).on("click", "#p_camareiras", function() {
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Camareiras</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    '<th>Nome</th>'+ 
                    '<th>Código</th>'+ 
                '</tr>'+
            '</thead>'
    )
    camareiraspdf(janela)
    janela.document.write("</body>")
    janela.document.write("</html>")
    setTimeout(() => {
        janela.print()
    }, 500);
})

async function camareiraspdf(janela) {
    const rq = await fetch(`${url}suits/php/relatorios/camareiras.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${e.nome}</td>`+
                        `<td>${e.codigo}</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    }
}
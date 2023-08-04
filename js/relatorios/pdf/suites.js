import {url} from "../../../urlbase.js"

$(document).on("click", "#p_suites", function() {
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Suítes</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    '<th>Código</th>'+ 
                    '<th>Número</th>'+ 
                    '<th>Nome</th>'+ 
                    '<th>Horas Locação</th>'+ 
                    '<th>Tolerância</th>'+ 
                    '<th>Cobrança</th>'+ 
                    '<th>Excedente</th>'+ 
                '</tr>'+
            '</thead>'
    )
    suites(janela)
    janela.document.write("</body>")
    janela.document.write("</html>")
    setTimeout(() => {
        janela.print()
    }, 500);
})

async function suites(janela) {
    const rq = await fetch(`${url}suits/php/relatorios/suites.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${e.codigoSuite}</td>`+
                        `<td>${e.numeroSuite}</td>`+
                        `<td>${e.nomeSuite}</td>`+
                        `<td>${e.horas_locacaoSuite}</td>`+
                        `<td>${e.toleranciaSuite}</td>`+
                        `<td>${e.cobrancaSuite}</td>`+
                        `<td>${e.excedenteSuite}</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    }
}
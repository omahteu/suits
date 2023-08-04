import {url} from "../../../urlbase.js"

$(document).on("click", "#p_ocupacoes", function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Ocupações</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    "<th>Data</th>"+
                    "<th>Código</th>"+
                    "<th>Quarto</th>"+
                    "<th>Entrada</th>"+
                    "<th>Saída</th>"+
                    "<th>Total</th>"+ 
                '</tr>'+
            '</thead>'
    )
    ocupacoes(janela)
    janela.document.write("</body>")
    janela.document.write("</html>")
    setTimeout(() => {
        janela.print()
    }, 500);
})

async function ocupacoes(janela) {
    const rq = await fetch(`${url}suits/php/relatorios/ocupacoes.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${e.data}</td>`+
                        `<td>${e.codigo}</td>`+
                        `<td>${e.quarto}</td>`+
                        `<td>${e.entrada}</td>`+
                        `<td>${e.saida}</td>`+
                        `<td>${e.total}</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    }
}

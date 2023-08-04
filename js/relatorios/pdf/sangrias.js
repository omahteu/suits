import {url} from "../../../urlbase.js"

$(document).on("click", "#p_sangrias", function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Sangrias</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    '<th>Dia</th>'+ 
                    '<th>Hora</th>'+ 
                    '<th>Usuário</th>'+ 
                    '<th>Valor</th>'+ 
                    '<th>Antigo Caixa</th>'+
                    '<th>Novo Caixa</th>'+
                '</tr>'+
            '</thead>'
    )
    sangrias(janela)
    janela.document.write("</body>")
    janela.document.write("</html>")
    setTimeout(() => {
        janela.print()
    }, 500);
})

async function sangrias(janela) {
    const rq = await fetch(`${url}suits/php/relatorios/sangrias.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${e.dia}</td>`+
                        `<td>${e.hora}</td>`+
                        `<td>${e.usuario}</td>`+
                        `<td>${e.valor}</td>`+
                        `<td>${e.ac}</td>`+
                        `<td>${e.ns}</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    }
}

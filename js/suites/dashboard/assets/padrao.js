export default function padraoDash(core) {
    var passo4 = $($(core)[0].children[0].children[1]).text();
    var cor = $($(core)[0]).css("background-color");
    $("#quarto_painel").text(passo4)
    if (cor == 'rgb(75, 192, 192)') {
        $("#vh_painel").text('0')
        $("#vq_painel").text('0')
        $("#consumo_painel").text('0.00')
        $("#parcial_painel").text('0')
        var tab = document.getElementById('listaProdutosComprados')
        tab.innerHTML = ''
        var pat = document.getElementById('listaveiculosguardados')
        pat.innerHTML = ''
    }
}

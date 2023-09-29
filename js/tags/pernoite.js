export default function pernoite(q, x, y, z) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#EE82EE"
    })
    // $(`[name=${q}]`).css('display', 'none')
    // $("#acoes1").css('display', 'inline-block')
    // $("#acoes1").val('Encerrar')
    // var hora = hora_atual()
    // $("#tipo").text('pernoite')
    // $("#quarto_painel").text(q)
    // $("#entrada").text(hora)
}

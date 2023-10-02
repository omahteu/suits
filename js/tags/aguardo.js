export default function aguardando(q) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FFFFFF"
    })
    $("#vh_painel").text('0')
    $("#vq_painel").text('0')
    $("#consumo_painel").text('0')
    $("#parcial_painel").text('0')
}

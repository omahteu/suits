export default function faxina(q) {

    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FFE4C4"
    })

    // $(`[name=${q}]`).css('display', 'none')
    // $("#acoes1").css('display', 'inline-block')
    // $("#acoes1").val('Encerrar Faxina')
    // if(t != 'btn faxina'){
    //     $("#acoes2").css('display', 'none')
    //     $("#acoes2").val('Alterar P/ Locação')

    //     $("#acoes3").css('display', 'none')
    //     $("#acoes3").val('Cancelar Reserva')
    // } 
    // var hora = hora_atual()
    // $("#quarto_painel").text(q)
    // $("#tipo").text('faxina')
    // $("#intervalo").text(`${x},${y},${z}`)
    // $("#entrada").text(hora)
}

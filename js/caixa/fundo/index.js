export default function _fundo() {
    $("#usarFundoCaixa").change(function () {
        var escolha = $(this).val()
        if (escolha == 'sim') {
            $("#valorFundoCaixa").css('display', 'inline')
        } else {
            $("#valorFundoCaixa").removeAttr('style')
        }
    })
}

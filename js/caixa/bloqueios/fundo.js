export default function _fundos() {
    var status = localStorage.getItem('caixa')
    if (status === 'fechado') {
        $("#usarFundoCaixa").prop('disabled', false)
    }
}

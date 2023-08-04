export default function _abertura() {
    var status = localStorage.getItem('caixa')
    if (status === 'fechado') {
        $("#abrirCaixa").prop('disabled', false)
    }
}

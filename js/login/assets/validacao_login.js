export default function verifica_login_existente() {
    var usuarioLogado = localStorage.getItem('usuarioLogado')
    var caixa = localStorage.getItem('caixa')
    if (usuarioLogado && caixa == 'aberto') {
        window.location = "./html/home.html"
    }
}

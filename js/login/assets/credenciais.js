export default function credenciando(perfil, usuario, ir = false) {
    if (perfil == 'admin') {
        localStorage.setItem('usuarioLogado', 'admin')
        localStorage.setItem('nome', usuario)
        localStorage.setItem('caixa', 'aberto')
        localStorage.setItem("prod", "sim")
        if (ir) {
            $(location).attr('href', './home.html')
        }
    } else {
        localStorage.setItem('usuarioLogado', 'caixa')
        localStorage.setItem('nome', usuario)
        localStorage.setItem('caixa', 'fechado')
        if (ir) {
            $(location).attr('href', './caixa.html')
        }
    }
}

export default function credenciando(perfil, usuario) {
    switch (perfil) {
        case 'admin':
            localStorage.setItem('usuarioLogado', 'admin')
            localStorage.setItem('nome', usuario)
            localStorage.setItem('caixa', 'aberto')
            localStorage.setItem("prod", "sim")
            $(location).attr('href', './html/home.html')
            break;
        case 'caixa':
            localStorage.setItem('usuarioLogado', 'caixa')
            localStorage.setItem('nome', usuario)
            localStorage.setItem('caixa', 'fechado')
            $(location).attr('href', './html/caixa.html')
            break
    
        default:
            break;
    }
}

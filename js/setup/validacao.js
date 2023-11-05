$(document).ready(function() {
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location = "../index.html"
    }
})

$("#fecharCaixa").click(function() {
    localStorage.removeItem('usuarioLogado')
    setTimeout( () => {
        document.location.reload(true)
        localStorage.removeItem("ficha")
        localStorage.removeItem("caixa")
        localStorage.removeItem("nome")  
        localStorage.removeItem("usuarioLogado")    
        localStorage.removeItem('permanencia')
        localStorage.removeItem('va')
        localStorage.removeItem('vst') 
        localStorage.removeItem('fundo')
        localStorage.removeItem('vs') 
        localStorage.removeItem('vc') 
        sessionStorage.removeItem('offs')
        sessionStorage.removeItem('tabela_precos')
        sessionStorage.removeItem('dados_suites')
    }, 4000)
})

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
    }, 4000)
})

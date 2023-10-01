$(window).on("load", function() {
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        window.location = "./html/home.html"
    }
})
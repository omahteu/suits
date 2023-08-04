$(window).on("load", function() {
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location = "../index.html"
    } else {
        window.location = "./html/home.html"
    }
})

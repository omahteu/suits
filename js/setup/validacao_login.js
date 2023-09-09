

// $(document).ready(function() {
//     var usuarioLogado = localStorage.getItem('usuarioLogado');
//     if (!usuarioLogado) {
//         window.location = "../suits/index.html"
//     } else {
//         window.location = "./html/home.html"
//     }
// })
document.addEventListener("DOMContentLoaded", function() {
    // Seu código JavaScript aqui
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location = "../suits/index.html"
    } else {
    //     window.location = "./html/home.html"
    }
});
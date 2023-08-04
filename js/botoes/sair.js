$(document).on("click", "#btn_off", () => {
    let status = localStorage.getItem("usuarioLogado")
    if (status == "admin"){
        localStorage.clear()
        location.href = "../index.html"
    } else if (status == "caixa"){
        location.href = "../html/caixa.html"
    }
})

$(document).on("click", "#sair", () => {
    let status = localStorage.getItem("usuarioLogado")
    if (status == "admin"){
        localStorage.clear()
        location.href = "../index.html"
    } else if (status == "caixa"){
        location.href = "../html/caixa.html"
    }
})

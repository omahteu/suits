$(document).ready(function () {
    setTimeout(() => {
        let i1 = localStorage.getItem("usuarioLogado");
        let i2 = localStorage.getItem("caixa");
        if (i1 === "caixa") {
            $("#home").attr("href", "./home.html");
            $("#urlCadastrosCaixa").attr("href", "./homecaixa.html");
            $("#urlQuartosCaixa").attr("href", "./homecaixa.html");
            $("#urlCaixaCaixa").attr("href", "./homecaixa.html");
        } else if (i1 === "admin") {
            $("#home").attr("href", "./home.html");
            $("#urlCadastrosCaixa").attr("href", "./home.html");
            $("#urlQuartosCaixa").attr("href", "./home.html");
            $("#urlConfiguracoesAdmin").attr("href", "./home.html");
        }
        if (i2 == "aberto") {
            $("#abrirCaixa").css("display", "none");
            $("#usarFundoCaixa").css("display", "none");
            $("#fecharCaixa").css("display", "inline");
        } else if (i2 == "fechado") {
            $("#abrirCaixa").css("display", "inline");
            $("#usarFundoCaixa").css("display", "inline");
            $("#fecharCaixa").css("display", "none");
        }
    }, 500);
});

function layout() {
    if (window.matchMedia("(max-width:768px)").matches) {
        setTimeout(() => {
            $("#tabelas_relatorios").removeClass("span12A").addClass("span12");
            $("#btn_principal").css("display", "none")
            $("#sair").css("display", "none")
            $("#desktop").css("display", "none")
            $(".sumir").css("display", "none")
            $("#email_autenticacao,#tipoPernoite").attr("disabled", "true")
        }, 170);
    } else {
        $("#sidebar").css("display", "none")
    }
}


$(document).ready(function(){
    layout()
    
    if (window.matchMedia("(max-width:768px)").matches) {
        setTimeout(() => {
            $(".sumir").css("display", "none")
        }, 800);
    }
})
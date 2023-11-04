$(window).on("load", function(){
    let status = localStorage.getItem("usuarioLogado")
    if (status == "caixa"){
        let cadastros = $(".cardBox")[0].children[1]
        let relatorios = $(".cardBox")[0].children[2]
        let config = $(".cardBox")[0].children[3]
        let dados = $(".cardBox")[0].children[5]
        let estoque = $(".cardBox")[0].children[6]
        let cloud = $(".cardBox")[0].children[7]
        let impressoras = $(".cardBox")[0].children[8]
        let sair = $(".cardBox")[0].children[9]
        
        $(cadastros).css("display", "None")
        $(relatorios).css("display", "None")
        $(config).css("display", "None")
        $(dados).css("display", "None")
        $(estoque).css("display", "None")
        $(cloud).css("display", "None")
        $(impressoras).css("display", "None")
        $(sair).css("display", "None")
    }
})

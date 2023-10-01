$(window).on("load", function(){
    let status = localStorage.getItem("usuarioLogado")
    if (status == "caixa"){
        let cadastros = $(".cardBox")[0].children[1]
        let config = $(".cardBox")[0].children[3]
        let dados = $(".cardBox")[0].children[5]
        let cloud = $(".cardBox")[0].children[7]
        
        $(cadastros).css("display", "None")
        $(config).css("display", "None")
        $(dados).css("display", "None")
        $(cloud).css("display", "None")
    }
})

var commands = {
    1: ".cardBox"
}

$(window).on("load", function(){
    let status = localStorage.getItem("usuarioLogado")
    if (status == "caixa"){
        let elementsToHide = [1, 2, 3, 5, 6, 7, 8, 9];
        elementsToHide.forEach(index => {
            $($(commands[1])[0].children[index]).css("display", "None");
        });
    }
});

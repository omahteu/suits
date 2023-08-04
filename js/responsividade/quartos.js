if (window.matchMedia("(max-width:768px)").matches) {
    setTimeout(() => {
        // OCULTAR BOTÕES DO MENU //
        let btn = document.querySelectorAll("#botao_hub")
        $(btn).css("display", "none")

        $("#li1, #li2").css("display", "none")
    }, 2000)
}

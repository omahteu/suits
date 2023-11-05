$(window).on("load", function() {

    let fundo = localStorage.getItem("fundo")
    let nome = localStorage.getItem("nome")
    
    $("#fundoCaixa").html(
        `<tr>
            <td>
                ${fundo}
            </td>
        </tr>`
    )

    $("#usuario").attr("placeholder", nome)
})
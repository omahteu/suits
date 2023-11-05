$(window).on("load", function() {

    let fundo = localStorage.getItem("fundo")
    
    $("#fundoCaixa").html(
        `<tr>
            <td>
                ${fundo}
            </td>
        </tr>`
    )
})
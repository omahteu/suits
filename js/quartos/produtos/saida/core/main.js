import registraProduto from "../assets/registroSaida.js"
import removeProduto from "../assets/removerSaida.js"

$(document).on("click", "#registrar_produto", function() {
    registraProduto()
})

$(document).on("click", "#remocaoProduto", function () {
    let id = $(this).attr("name")
    removeProduto(id)
})

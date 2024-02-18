import estoqueDisponivel from "../assets/produtosDisponiveis.js";

$(document).ready(function () {
    estoqueDisponivel('r', "");
});

$(document).on('keydown', "#codigo_produto", function (e) {
    if (e.which === 9) {
        const codigoProduto = $(this).val();
        estoqueDisponivel("i", codigoProduto);
        $("#checkbox_produto").hide();
    }
});

import fazerRequisicaoAjax from "../../../tools/ajax.js";
import make_url from "../../../tools/urls.js";

const url = make_url("quartos/entradas", "produtos.php");

function adicionarOpcaoCheckbox(descricao) {
    $('#checkbox_produto').append(`<option>${descricao}</option>`);
}

function atualizarCamposProduto(produto) {
    $("#descricao").val(produto.descricao);
    $("#valor_unitario").val(`R$ ${produto.valorunitario}`);
}

function calcularEAtualizarValorTotal(valorUnitario, quantidade) {
    const qtd = quantidade || 0;
    const total = parseFloat(valorUnitario) * parseInt(qtd);
    $("#valor_total").val(`R$ ${total.toFixed(2)}`);
}

function handleProdutoSelection(dados) {
    $(document).on("change", "#checkbox_produto", function () {
        const unid = $("#checkbox_produto :selected").text();
        const filtroCard = dados.find(i => i.descricao === unid);

        if (filtroCard) {
            atualizarCamposProduto(filtroCard);

            $(document).on("keyup", "#quantidade", function () {
                calcularEAtualizarValorTotal(filtroCard.valorunitario, $(this).val());
            });
        }
    });
}

function handleReadyData(dados) {
    const permis = localStorage.getItem("prod");

    dados.forEach(e => {
        const estoque = e.quantidade;

        if ((permis === "nao" && estoque > 0) || permis === "sim") {
            adicionarOpcaoCheckbox(e.descricao);
        }
    });

    handleProdutoSelection(dados);
}

function handleInputData(dados, produto) {
    const buscandoProduto = dados.find(x => x.codigo == produto);

    if (buscandoProduto) {
        atualizarCamposProduto(buscandoProduto);
        $("#valor_total").val(`R$ 0.00`);

        $(document).on("keyup", "#quantidade", function () {
            calcularEAtualizarValorTotal(buscandoProduto.valorunitario, $(this).val());
        });
    } else {
        console.log("Produto não encontrado.");
    }
}

export default function estoqueDisponivel(entrada, produto) {
    fazerRequisicaoAjax(url, "GET", null, function (response) {
        const data = JSON.parse(response);

        if (data.status) {
            if (entrada === "r") {
                handleReadyData(data.dados);
            } else {
                handleInputData(data.dados, produto);
            }
        } else {
            console.log('Erro | Linha 21, produtosDisponiveis.js | Contate o Administrador.');
        }
    }, function (error) {
        console.log(error);
    });
}

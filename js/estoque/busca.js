import expandir from "../estoque/estrutural/form.js"
import {data_atual} from "../geradores/data.js"
import {url} from "../../urlbase.js"

$(document).on("click", "#BuscaInfoProduto", function(){
    expandir(data_atual())
    let codigo_pesquisado = $("#codigoProduto").val()
    var dd = $(this)[0].children[1]
    $(dd).text("Salvar")
    $("#acao_movimentacao").css("display", "inline")
    $("#quantidadeProduto").css("display", "inline")
    $("#SalvarMovimentoEstoque").css("display", "inline")
    setTimeout(() => {
        return_produtos(codigo_pesquisado)
        $("#lll").html("")
        $(".button__text2").text("Salvar")
    }, 50);
})

async function return_produtos(Pcodigo) {
    const rq = await fetch(`${url}suits/php/estoque/show/produtos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let dados = rs["dados"].filter(e => e.codigo == Pcodigo)
        dados.forEach(i => {
            $("#m1").text(i.id)
            $("#m2").text(i.data)
            $("#quantidade_base").val(i.quantidade)
            $("#codigoProduto").val(Pcodigo).prop('readonly', true);
            $("#descricaoProduto").val(i.descricao)
            $("#valorUnitarioProduto").val(i.valorunitario)
            $("#categoriaProduto").val(i.categoria)
        });
    }
}

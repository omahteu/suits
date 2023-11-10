import {RAIZ} from "../../../raiz.js"

$(document).ready(function () {
    disponivel()
})

$(document).on('keydown', "#codigo_produto", function (e) {
    if (e.which === 9) {
        let codigoProduto = $(this).val()
        popi(codigoProduto)
        $("#checkbox_produto").hide()
    }
});

async function disponivel(){
    const rq = await fetch(`http://${RAIZ}/suits/php/estoque/show/produtos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(item => {
            var estoque = item.quantidade
            var permis = localStorage.getItem("prod")
            if (permis == "nao") {
                if (estoque > 0) {
                    $('#checkbox_produto').append(`<option>${item.descricao}</option>`)
                }
            } else if (permis == "sim") {
                $('#checkbox_produto').append(`<option>${item.descricao}</option>`)
            }
        });
        $(document).on("change", "#checkbox_produto", function(){
            var unid = $("#checkbox_produto :selected").text()
            let filtroCard = rs["dados"].filter(i => i.descricao == unid)
            $("#descricao").val(filtroCard[0].descricao)
            $("#valor_unitario").val(`R$ ${filtroCard[0].valorunitario}`)
            $(document).on("keyup", "#quantidade", function(){
                let opu = $(this).val()
                if (opu == "" || opu == 0) {
                    $("#valor_total").val(`R$ 0.00`)
                } else {
                    var qtd = $(this).val()
                    var total = parseFloat(filtroCard[0].valorunitario) * parseInt(qtd)
                    $("#valor_total").val(`R$ ${total}`)
                }

            })
        })
    }
}

async function popi(codigoProduto) {
    const rq = await fetch(`http://${RAIZ}/suits/php/estoque/show/produtos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let buscandoProduto = rs["dados"].filter(x => x.codigo == codigoProduto)
        $("#descricao").val(buscandoProduto[0].descricao)
        $("#valor_unitario").val(`R$ ${buscandoProduto[0].valorunitario}`)
        $("#valor_total").val(`R$ 0.00`)
        $(document).on("keyup", "#quantidade", function() {
            var qtd = $(this).val()
            console.log(qtd)
            var total = parseFloat(buscandoProduto[0]['valorunitario']) * Number(qtd)
            $("#valor_total").val(`R$ ${parseFloat(total).toFixed(2)}`)
        });
    }
}

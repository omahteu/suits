import link from "../../../setup/index.js"
import {RAIZ} from "../../../raiz.js"

$(document).ready(function () {
    produtoCodigo()
    disponivel()
})

async function disponivel(){
    const rq = await fetch(`http://${RAIZ}/suits/php/estoque/show/produtos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(item => {
            var estoque = item.quantidade
            var permis = localStorage.getItem("prod")
            if (permis == "nao") {
                if (estoque.length != 0) {
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
                var qtd = $(this).val()
                var total = parseFloat(filtroCard[0].valorunitario) * parseInt(qtd)
                $("#valor_total").val(`R$ ${total}`)
            })
        })
    }
}

function produtoCodigo() {
    $('#codigo_produto').keypress((event) => {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $.get(link[16], (e) => {
                $("#descricao").val(e[0].descricao)
                $("#valor_unitario").val(`R$ ${e[0].valorunitari}`)
                $('#quantidade').keyup(() => {
                    var qtd = $(this).val()
                    var total = parseFloat(e[0]['valorunitario']) * Number(qtd)
                    $("#valor_total").val(`R$ ${parseFloat(total).toFixed(2)}`)
                });
            })
        }
    })
}

import {RAIZ} from "../../raiz.js"

export async function operantis(){
    const rq = await fetch(`http://${RAIZ}/suits/php/estoque/show/produtos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
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
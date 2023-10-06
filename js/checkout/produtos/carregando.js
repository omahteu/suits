import {RAIZ} from "../../raiz.js"

export async function produtos(){
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
    }
}

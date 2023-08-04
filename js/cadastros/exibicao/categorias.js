import {url} from "../../../urlbase.js"

export async function exibir_categorias_cadastradas(){
    const rq = await fetch(`${url}suits/php/cadastros/show/categorias.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            $("#categoria").append(`<option value="${e.categoria}" >${e.categoria}</option>`)
        });
    }
}

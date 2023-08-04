import {url} from "../../../urlbase.js"

export async function exibe_placas(){
    const rq = await fetch(`${url}suits/php/cadastros/show/placas.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            $("#placa").append(`<option>${e.ip}</option>`)
        });
    }
}

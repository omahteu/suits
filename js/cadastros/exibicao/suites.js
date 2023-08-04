import {url} from "../../../urlbase.js"

export async function exibe_suites(){
    const rq = await fetch(`${url}suits/php/cadastros/show/suites.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            $("#suiteA").append(`<option>${e.numeroSuite}</option>`)
        });
    }
}

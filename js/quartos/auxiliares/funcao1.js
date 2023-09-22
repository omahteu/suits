import {RAIZ} from "../../raiz.js"

export async function buscaLocacoes() {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/infos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        sessionStorage.setItem("offs", JSON.stringify(rs["dados"]))
    } else {
        sessionStorage.setItem("offs", JSON.stringify([]))
    }
}

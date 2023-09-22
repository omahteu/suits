import {RAIZ} from "../../raiz.js"

export async function buscaPrecos() {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/precos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        sessionStorage.setItem("tabela_precos", JSON.stringify(rs["dados"]))
    }
}

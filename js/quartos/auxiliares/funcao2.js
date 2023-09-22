import {RAIZ} from "../../raiz.js"

export async function buscaSuites() {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/suites.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        sessionStorage.setItem("dados_suites", JSON.stringify(rs["dados"]))
    }
}

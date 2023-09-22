import {RAIZ} from "../../raiz.js"

export async function tarefas() {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/tarefas.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        sessionStorage.setItem("tarefas", JSON.stringify(rs["dados"]))
    }
}

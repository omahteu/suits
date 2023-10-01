// import link from "../../setup/index.js";
import {RAIZ} from "../../raiz.js"

export async function _dados() {
    const rq = await fetch(`http://${RAIZ}/suits/php/caixa/show/pagamentos.php`)
    const rs = await rq.json()
    if (rs['status']) {
        sessionStorage.setItem("pagamentos", JSON.stringify(rs['dados']))
    }
}

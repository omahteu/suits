import { RAIZ } from "../raiz.js"

$(window).on("load", function () {
    auditoria_estoque()
})

async function auditoria_estoque() {
    const rq = await fetch(`http://${RAIZ}/suits/php/home/exibe_produtos.php`)
    const rt = await rq.json()
    if (rt["status"]) {
        rt['dados'].forEach(e => {
            if (e.quantidade == 0) {
                alert(`O estoque do produto acabou!`)
            }
        });
    } else {
        alert("O estoque está sem produtos registrados")
    }
}

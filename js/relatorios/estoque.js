import {url} from "../../urlbase.js"

$(window).on("load", function() {
    auditoria_estoque()
})

async function auditoria_estoque(){
    const rq = await fetch(`${url}suits/php/home/exibe_produtos.php`)
    const rt = await rq.json()
    if (rt["status"]) {
        if (rt.length == 0) {
            alert("O estoque está sem produtos registrados")
        } else {
            rt.forEach(e => {
                if(e.quantidade == 0){
                    alert(`O estoque do produto acabou!`)
                }
            });
        }
    }
}

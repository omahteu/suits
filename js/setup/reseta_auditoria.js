import link from "./index.js"
import apagar from "../olivia/apaga.js"

$(document).ready(function() {
    reseta_tabela_auditoria()
})

async function reseta_tabela_auditoria(){
    const query = await fetch(link[1])
    const dados = await query.json()
    var inicio = Number(dados[0].id)
    var fim = $(dados).get(-1).id
    for(var i = inicio; i <= fim + 1; i++){
        apagar(`${link[1]}${i}/`)
    }
}

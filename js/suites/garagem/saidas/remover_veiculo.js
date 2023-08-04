import { vv } from "../../../armazem/leitura/veiculos.js"
import link from "../../../setup/index.js"
import apagar from "../../../olivia/apaga.js"

$(document).on("click", "#remocaoVeiculo", function(){
    let suite = $(this).attr("name")
    let motivo = prompt('Motivo da retirada do veículo?:')
    if (motivo == null) {
        alert('Veículo não retirado!\nÉ necessário o motivo da eretirada do veículo!')
    } else if (motivo.length == 0) {
        alert('Veículo não retirado!\nÉ necessário o motivo da eretirada do veículo!')
    } else {
        apagar(`${link[15]}${suite}/`)
        vv(suite)
    }
})

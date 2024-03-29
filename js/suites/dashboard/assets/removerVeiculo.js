import { vv } from "../../../armazem/leitura/veiculos.js"
import apagar from "../../../olivia/apaga.js"
import {RAIZ} from "../../../raiz.js"
import registraMotivoExclusao from "../../operacao/remocao.js"

export default function remover(suite) {
    let id = $(this).attr("name")
    let motivo = prompt('Motivo da retirada do veículo?:')
    if (motivo == null) {
        alert('Veículo não retirado!\nÉ necessário o motivo da eretirada do veículo!')
    } else if (motivo.length == 0) {
        alert('Veículo não retirado!\nÉ necessário o motivo da eretirada do veículo!')
    } else {
        registraMotivoExclusao("Remoção de Veículo", motivo)
        let dados = 'tabela=' + 'patio' + '&coluna=' + 'id' + '&valor=' + id
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados)
        vv(suite)
    }
}

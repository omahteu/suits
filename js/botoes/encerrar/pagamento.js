import { data_atual } from "../../geradores/data.js"
import salvar from "../../olivia/salva.js"
import {RAIZ} from "../../raiz.js"

export default function registrar_pagamento() {
    let metodo_pagamento = $("#modo_pagamento :selected").text()
    let parcelas = $("#numero_parcelas").val()
    let pagamento = $("#totalGeral").text()
    let dados = 'valor=' + parseFloat(pagamento).toFixed(2) + '&forma=' + metodo_pagamento + '&parcelas=' + parcelas + '&data=' + data_atual() + '&usuario=' + localStorage.getItem("nome")
    salvar(`http://${RAIZ}/suits/php/suites/pagamento.php`, dados)
}

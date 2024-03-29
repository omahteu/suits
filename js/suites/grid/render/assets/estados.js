import aguardando from "../../../../tags/aguardo.js"
import faxina from "../../../../tags/faxina.js"
import limpeza from "../../../../tags/limpeza.js"
import locado from "../../../../tags/locacao.js"
import manutencao from "../../../../tags/manutencao.js"
import pernoite from '../../../../tags/pernoite.js'
import ag_pagamento from "../../../../tags/apagamento.js"
import revisao from "../../../../tags/revisao.js"


export default function restaurarEstado(suite, tipo) {
    
    
    try {
        console.time("restaurar estado");
        tipo == "locado" ? locado(suite) :
            tipo == "manutencao" ? manutencao(suite) :
                tipo == "faxina" ? faxina(suite) :
                    tipo == "aguardando" ? aguardando(suite) :
                        tipo == "limpeza" ? limpeza(suite) :
                            tipo == "pernoite" ? pernoite(suite) :
                                tipo == "apagamento" ? ag_pagamento(suite) :
                                    tipo == "revisao" ? revisao(suite) : ""
        console.timeEnd("restaurar estado");
    } catch (error) {
        console.log(error)
    }
}

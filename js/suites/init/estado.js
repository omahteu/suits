import aguardando from "../../tags/aguardo.js"
import faxina from "../../tags/faxina.js"
import limpeza from "../../tags/limpeza.js"
import locado from "../../tags/locacao.js"
import manutencao from "../../tags/manutencao.js"
import pernoite from '../../tags/pernoite.js'
import receber from "../../quartos/auxiliares/funcao4.js"
import ag_pagamento from "../../tags/apagamento.js"
import revisao from "../../tags/revisao.js"

setInterval(() => {
	let base = receber("offs")
	base.forEach(e => {
		try {
			restoreStatus(e.suite, e.tipo)
		} catch (jqXHR) {
			sessionStorage.setItem("viewquartos.js", `LOGS | ${jqXHR}`)
		}
	});
}, 1000);

function restoreStatus(suite, tipo) {
	try {
		tipo == "locado" ? locado(suite) :
		tipo == "manutencao" ? manutencao(suite) :
		tipo == "faxina" ? faxina(suite) :
		tipo == "aguardando" ? aguardando(suite) :
		tipo == "limpeza" ? limpeza(suite) :
		tipo == "pernoite" ? pernoite(suite) : 
		tipo == "apagamento" ? ag_pagamento(suite) : 
		tipo == "revisao" ? revisao(suite) : ""
	} catch (error) {
		sessionStorage.setItem("viewquartos.js", `[LOGS] | ${error}`)
	}
}

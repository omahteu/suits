import { leituraProdutos } from "../leitura/produtos.js"
import { hora_atual } from "../../geradores/hora.js"
import link from "../../setup/index.js"
import salvar from "../../olivia/salva.js"

export function registroProdutos(){
	var produto = {
		suite: $("#quarto_painel").text(),
		descricao: $("#descricao").val(),
		quantidade: $("#quantidade").val(),
		valor_total: $("#valor_total").val().slice(3),
		valor_unitario: $("#valor_unitario").val().slice(3),
		datahora: hora_atual(),
		valor_suite: $("#vq_painel").text()
	}
	salvar(link[5], produto, true, "Produto adicionado à Suíte", false, "formCadastros")
	leituraProdutos()
}

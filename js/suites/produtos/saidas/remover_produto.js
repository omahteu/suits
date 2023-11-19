import { ll } from "../../../armazem/leitura/produtos.js"
import apagar from "../../../olivia/apaga.js"
import { RAIZ } from "../../../raiz.js"
import registraMotivoExclusao from "../../../suites/operacao/remocao.js"

$(document).on("click", "#remocaoProduto", function () {
    let suite = $("#quarto_painel").text()
    let id = $(this).attr("name")
    let motivo = prompt('Motivo da retirada do produto:')
    if (motivo == null) {
        alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
    } else if (motivo.length == 0) {
        alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
    } else {
        registraMotivoExclusao("Remoção de Produto", motivo)
        let dados = 'tabela=' + 'comanda' + '&coluna=' + 'id' + '&valor=' + id
        apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, dados)
        ll(suite)
        calculo(suite)
    }
})

async function calculo(suite) {
	const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
	const rs = await rq.json()
	if (rs["status"]) {
		let filtroComanda = rs["dados"].filter(i => i.suite == suite)
        let valorSuite = $("#vq_painel").text()
		let sum = 0
		filtroComanda.forEach(el => {
			sum += parseFloat(el.valor_total.replace(/[^\d.-]/g, ''))
		})
        let subTotal = sum + parseFloat(valorSuite)
		$("#consumo_painel").text(sum.toFixed(2))
        //$("#parcial_painel").text(subTotal.toFixed(2))
	} else {
        let valorSuite = $("#vq_painel").text()
        //$("#parcial_painel").text(parseFloat(valorSuite).toFixed(2))
        $("#consumo_painel").text('0.00')
    }
}

import receber from "../../../quartos/auxiliares/funcao4.js"
import comandaSuite from "./comanda.js"
import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"
import calculo from "./comandaSoma.js"

export default function registraProduto() {
    const url = make_url("quartos/saidas", "comanda.php")
	let locacoes = receber("offs")
	let suite = $("#quarto_painel").text()
	let verificaLocacaoSuite = locacoes.filter(o => o.suite == suite)
	var tipos = ['locado', 'pernoite']
	let quantidade = $("#quantidade").val()
	try {
		let tipo = verificaLocacaoSuite[0].tipo
		if(tipos.includes(tipo)){
			if (quantidade){
				setTimeout(() => {
					let dados = $("#formCadastros").serialize()
                    fazerRequisicaoAjax(url, "POST", dados, function(response) {
                        alert("Produto adicionado!")
                        document.getElementById("formCadastros").reset()
                        comandaSuite(suite)
                        calculo(suite)
                        $("#checkbox_produto").show();
                    }, function(error) {
                        console.log("ERRO | Linha 25 | registroSaida.js | Contate o Administrador")
                    })
				}, 500);
			} else {
				alert("Insira a quantidade do produto! ")
			}
		}
	} catch (error) {
		alert('Selecione um Quarto!')
	}
}

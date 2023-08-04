import receber from "../auxiliares/funcao4.js"

export function valoresIniciais(quarto) {
    var i1 = receber("dados_suites")
    var i2 = receber("tabela_precos")
    var infosQuatos = i1.filter(e => e.numeroSuite == quarto)
    var horas_iniciais_locacao = infosQuatos[0].horas_locacaoSuite
    var valor_inicial_locacao = i2[0].locacao
    var valorInicial = Number(valor_inicial_locacao) * Number(horas_iniciais_locacao)
    sessionStorage.setItem("valorInicialSuite", valorInicial)
}

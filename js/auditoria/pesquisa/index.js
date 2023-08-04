import dados_atividade from "../leitura/atividades.js"
import dados_desistencia from "../leitura/desistencias.js"
import dados_faxina from "../leitura/faxinas.js"
import dados_limpeza from "../leitura/limpezas.js"
import dados_locacao from "../leitura/locacoes.js"
import dados_manutencao from "../leitura/manutencoes.js"
import dados_pagamento from "../leitura/pagamentos.js"
import dados_produto from "../leitura/movimentacoes.js"
import dados_troca from "../leitura/trocas.js"

$(document).on("click", "#buscar_dados", function () {
    let usuario = $("#codigo_caixa :selected").text()
    let inicio = $("#inicio_filtro").val()
    let fim = $("#final_filtro").val()
    
    if (usuario == "Caixa"){
        alert("Usuário Inválido!")
    } else if (inicio == "" || fim == "") {
        alert("Datas Inválidas!")
    } else {
        alert("Filtro Aplicado!")
        dados_atividade(usuario, inicio, fim)
        dados_desistencia(usuario, inicio, fim)
        dados_faxina(usuario, inicio, fim)
        dados_limpeza(usuario, inicio, fim)
        dados_locacao(usuario, inicio, fim)
        dados_manutencao(usuario, inicio, fim)
        dados_pagamento(usuario, inicio, fim)
        dados_produto(usuario, inicio, fim)
        dados_troca(usuario, inicio, fim)
    }
})

import { data_atual } from "../../geradores/data.js"
import { hora_atual_segundos } from "../../geradores/hora.js"
import { gera_id } from "../../geradores/id.js"

import salvar from "../../olivia/salva.js"

// import link from "../../setup/index.js"

import { RAIZ } from "../../raiz.js"

export default function ocupacao() {
    let quarto = localStorage.getItem("last")
    var box = JSON.parse(sessionStorage.getItem("offs"))
    let codigo_ocupacao = gera_id(5)
    let entrada = box[0].hora
    localStorage.setItem(`codigo${quarto}`, codigo_ocupacao)
    // var dados = {
    //     usuario: localStorage.getItem("nome"),
    //     data: data_atual(),
    //     codigo: codigo_ocupacao,
    //     quarto: quarto,
    //     entrada: entrada,
    //     saida: hora_atual_segundos(),
    //     total: $("#totalGeral").text()
    // }
    let caixa = 'usuario=' + localStorage.getItem("nome") + '&data=' + data_atual() + '&codigo=' + codigo_ocupacao + '&suite=' + quarto + '&entrada=' + entrada + '&saida=' + hora_atual_segundos() + '&total=' + $("#totalGeral").text()
    salvar(`http://${RAIZ}/suits/php/suites/ocupacao.php`, caixa)
}

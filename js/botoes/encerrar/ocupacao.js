import { data_atual } from "../../geradores/data.js"
import { hora_atual_segundos } from "../../geradores/hora.js"
import { gera_id } from "../../geradores/id.js"

import salvar from "../../olivia/salva.js"

import link from "../../setup/index.js"

export default function ocupacao() {
    let quarto = localStorage.getItem("last")
    var box = JSON.parse(sessionStorage.getItem("offs"))
    let codigo_ocupacao = gera_id(5)
    let entrada = box[0].datahora
    localStorage.setItem(`codigo${quarto}`, codigo_ocupacao)
    var dados = {
        usuario: localStorage.getItem("nome"),
        data: data_atual(),
        codigo: codigo_ocupacao,
        quarto: quarto,
        entrada: entrada,
        saida: hora_atual_segundos(),
        total: $("#totalGeral").text()
    }
    salvar(link[13], dados)
}

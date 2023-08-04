import { desfazer } from "../tags/desfazer.js"
import { fimModal } from "../js/camareiras.js"
import { stop } from "../setup/stop_relogios.js"
import { clean } from "../setup/clean_relogios.js"
import link from "../setup/index.js"
import salvar from "../olivia/salva.js"
import { data_atual } from "../geradores/data.js"
import { hora_atual } from "../geradores/hora.js"

$(document).on("click", "#selecionaCamareiraLimpeza", function() {   
    let usuario = $("#usuario_sistema").text() 
    let camareira = $("#selecionaCamareira").val()
    var suite = $("#quarto_painel").text()
    var flags = $("#intervalo").text().split(",")
    let hora = $(`#hora${suite}`).text()
    let minu = $(`#minuto${suite}`).text()
    let segu = $(`#segundo${suite}`).text()
    let tempo = `${hora}:${minu}:${segu}`
    setTimeout( () => {fimModal()}, 500)
    stop[suite]()
    clean[suite](suite)
    setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
    let dados = {
        caixa: usuario,
        data: data_atual(),
        hora: hora_atual(),
        quarto: suite,
        tempo: tempo,
        camareira: camareira
    }
    salvar(link[12], dados)
})

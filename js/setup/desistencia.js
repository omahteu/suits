import { data_atual } from "../geradores/data.js"
import { hora_atual } from "../geradores/hora.js"
import link from "./index.js"
import salvar from "../olivia/salva.js"
import apagar from "../olivia/apaga.js"
import {RAIZ} from "../raiz.js"
import alterar from "../olivia/altera.js"
import ocupacao from "../botoes/encerrar/ocupacao.js"
import limpando from "../botoes/encerrar/limpar.js"

$("#aceitar_desistencia").click(function() {

    var suite = localStorage.getItem('last')
    var dados = 'suite=' + suite + '&tipo=' + 'aguardando'
    alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados)

    setTimeout(() => { ocupacao() }, 800)
    /*
    setTimeout(() => {
        let id = localStorage.getItem("last")
        desligar_luz(id)
        localStorage.setItem("luz", "desligada")
    }, 400)*/




    setTimeout( () => {desistir()}, 300)
    setTimeout( () => {registrando_desistencia()}, 500)
    setTimeout( () => {limpando_desistencia()}, 800)

    setTimeout(() => { limpando() }, 900)
    setTimeout(() => { window.close() }, 1000)
})

var texto = []

function desistir(){
    var motivo = $("#mmotivo_desistencia").val()
    if(motivo == ""){
        alert("campo vazio")
    } else {
        texto.push(motivo)
        let usuario = $("#usuario_sistema").text()
        let quarto = localStorage.getItem("quarto")
        var box = JSON.parse(localStorage.getItem("dadosQuarto"))
        let dataAtual = data_atual()
        let codigo_ocupacao = gera_codigo()
        localStorage.setItem(`codigo${quarto}`, codigo_ocupacao)
        let dados = 'usuario=' + usuario + '&data=' + dataAtual + '&codigo=' + codigo_ocupacao + '&suite=' + quarto + '&entrada=' + box[0].tempo + '&saida=' + hora_atual() + '&total=' + '0'
        salvar(`http://${RAIZ}/suits/php/suites/ocupacao.php`, dados, false, "", false, "")
    }
}

async function limpando_desistencia(){
    var quartx = localStorage.getItem("quarto")
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        rs["dados"].forEach(e => {
            var dados = e.filter(quartos => quartos.quarto == quartx)
            var id = dados[0].id
            let caixa = 'tabela=' + 'comanda' + '&coluna=' + 'id' + '&valor=' + id
            apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, caixa)
        });
    }
    const rq2 = await fetch(`http://${RAIZ}/suits/php/suites/show/patio.php`)
    const rs2 = await rq2.json()
    if (rs2["status"]) {
        rs2["dados"].forEach(e => {
            var dados = e.filter(quartos => quartos.quarto == quartx)
            if(dados.length == 0){
                console.log("Pátio Vázio!")
            } else {
                var id = dados[0].id
                let caixa = 'tabela=' + 'comanda' + '&coluna=' + 'id' + '&valor=' + id
                apagar(`http://${RAIZ}/suits/php/suites/excluir.php`, caixa)
            }
        });
    }
    localStorage.removeItem(quartx)
    localStorage.removeItem("dadosQuarto")
    localStorage.removeItem(quartx)
    localStorage.removeItem("quarto")
}

function registrando_desistencia(){
    var quarto = localStorage.getItem("last")
    var codigo = localStorage.getItem(`codigo${quarto}`)
    var caixa = localStorage.getItem("caixa")
    var motiv = texto[texto.length - 1]
    let dados = 'caixa=' + caixa + '&data=' + data_atual() + '&hora=' + hora_atual() + '&suite=' + quarto + '&motivo=' + motiv
    salvar(`http://${RAIZ}/suits/php/suites/desistencia.php`, dados, false, "", false, "")
}

import {RAIZ} from "../raiz.js"
import {hora_atual_segundos} from "../geradores/hora.js"
import salvar from "../olivia/salva.js"

$(document).on("click", "#imprimir_parcial_checkout", function() {
    impressao()
})

async function impressao() {
    const rq = await fetch(`http://${RAIZ}/suits/php/impressoras/show/emuso.php`)
    const rs = await rq.json()
    if (rs['dados']) {
        if (rs['dados'][0].parcial == 'n') {
            var suite = $("#suiteEncerrando").text()
            let base = JSON.parse(sessionStorage.getItem('offs'))
            let fsuits = base.filter(z => z.suite == suite)
            let inicio = fsuits[0].hora
            let fim = hora_atual_segundos()
            let tempo = $("#tempoPermanencia").text()
            let vsuite = localStorage.getItem(`vs${suite}`) == null ? '0' : localStorage.getItem(`vs${suite}`)
            let consumo = localStorage.getItem(`vc${suite}`) == null ? '0' : localStorage.getItem(`vc${suite}`)
            let add = localStorage.getItem(`va${suite}`) == null ? "0" : localStorage.getItem(`va${suite}`) 
            let total = $("#totalGeral").text()
            let receber = localStorage.getItem(`troco${suite}`) == null ? "0" : localStorage.getItem(`troco${suite}`)
            let dados = 'suite=' + suite + '&inicio=' + inicio + '&fim=' + fim + '&tempo=' + tempo + '&tipo=' + 'Locacao' + '&vsuite=' + vsuite + '&vconsumo=' + parseFloat(consumo).toFixed(2) + '&vadd=' + parseFloat(add).toFixed(2) + '&total=' + total + '&receber=' + parseFloat(receber).toFixed(2)
            console.log(dados)
            salvar(`http://${RAIZ}/suits/php/suites/impressao.php`, dados)
        }
    }
}

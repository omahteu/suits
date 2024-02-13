// import link from "../../setup/index.js"
import { data_atual } from "../../geradores/data.js"
import { hora_atual_segundos } from "../../geradores/hora.js"
import alterar from "../../olivia/altera.js"
import { RAIZ } from "../../raiz.js"

var soma = 0
var totalPrecoProdutos = []
var ficha = []

export default async function _valores() {
    var hoje = data_atual()
    const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/ocupacoes.php`)
    const rs = await rq.json()
    if (rs['status']) {
        rs['dados'].forEach(e => {
            if (e.data == hoje) {
                totalPrecoProdutos.push(e.total)
            }
        })
        totalPrecoProdutos.forEach(i => {
            soma += parseFloat(i)
        });
        const wq = await fetch(`http://${RAIZ}/suits/php/caixa/show/caixa.php`)
        const ws = await wq.json()
        if (ws['status']) {
            let id = e[e.length - 1].id
            let data = e[e.length - 1].data
            let entrada = e[e.length - 1].entrada
            let usuario = e[e.length - 1].usuario
            let soma_fundo = e[e.length - 1].fundo
            ficha.push(id, data, entrada, usuario)
            soma_fundo == "0" ? ficha.push("0") : ficha.push(soma_fundo)
            setTimeout(() => {    
                var total = parseFloat(soma) + parseFloat(ficha[4])
                let dados = 
                'data=' + ficha[1] + 
                '&entrada=' + ficha[2] + 
                '&usuario=' + ficha[3] + 
                '&fundo=' + ficha[4] + 
                '&total=' + total + 
                '&saida' + hora_atual_segundos()
                alterar(`http://${RAIZ}/suits/php/suits/caixa.php`, dados)
            }, 200)
        }
    }
}

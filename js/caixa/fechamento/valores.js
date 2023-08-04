import link from "../../setup/index.js"
import { data_atual } from "../../geradores/data.js"
import { hora_atual_segundos } from "../../geradores/hora.js"
import alterar from "../../olivia/altera.js"

var soma = 0
var totalPrecoProdutos = []
var ficha = []

export default async function _valores() {
    
    var hoje = data_atual()
    
    const rq = await fetch(link[13])
    const rs = await rq.json()
    
    rs.forEach(e => {
        if (e.data == hoje) {
            totalPrecoProdutos.push(e.total)
        }
    })
    totalPrecoProdutos.forEach(i => {
        soma += parseFloat(i)
    });
    console.log(totalPrecoProdutos)
    
    $.get(link[2], (e) => {
        
        let id = e[e.length - 1].id
        let data = e[e.length - 1].data
        let entrada = e[e.length - 1].entrada
        let usuario = e[e.length - 1].usuario
        let soma_fundo = e[e.length - 1].fundo
        ficha.push(id, data, entrada, usuario)
        soma_fundo == "0" ? ficha.push("0") : ficha.push(soma_fundo)
    })
    setTimeout(() => {    
        
        var total = parseFloat(soma) + parseFloat(ficha[4])
        var dados = {
            data: ficha[1],
            entrada: ficha[2],
            usuario: ficha[3],
            fundo: ficha[4],
            total: total,
            saida: hora_atual_segundos()
        }
        alterar(`${link[2]}${ficha[0]}/`, dados)
    }, 200)
}

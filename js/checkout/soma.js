import {receber} from "../quartos/auxiliares/funcao4.js"

setInterval(() => {
    let comanda = receber('vcomanda')
    let suite = receber('vsuite')
    let permanencia = receber('permanencia')
    let sub = receber('vsubtotal')
    let adicional = receber('vadicional')
    let total = receber('vtotal')
}, 1000);
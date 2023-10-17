import receber from "../quartos/auxiliares/funcao4.js"

setInterval(() => {
    let comanda = receber('vcomanda')
    let suite = receber('vsuite')
    // let permanencia = receber('permanencia')
    // let sub = receber('vsubtotal')
    let adicional = receber('vadicional')
    // let total = receber('vtotal')
    var totalgeral = parseFloat(suite) + parseFloat(adicional) + parseFloat(comanda)
    $("#totalGeral").text(parseFloat(totalgeral).toFixed(2))
}, 1000);

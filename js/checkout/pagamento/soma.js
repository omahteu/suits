setInterval(() => {
    let comanda = localStorage.getItem('vc')
    let suite = localStorage.getItem('vs')
    let desconto = localStorage.getItem('vd') == null ? '0' : localStorage.getItem('va')
    let adicional = localStorage.getItem('va')
    // let total = receber('vtotal')
    var totalgeral = parseFloat(suite) + parseFloat(adicional) + parseFloat(comanda) - parseFloat(desconto)
    $("#totalGeral").text(parseFloat(totalgeral).toFixed(2))
}, 1000);

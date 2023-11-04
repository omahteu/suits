setInterval(() => {
    let comanda = localStorage.getItem('vc') == null ? '0' : localStorage.getItem('vc')
    let suite = localStorage.getItem('vs') == null ? '0' : localStorage.getItem('vs')
    let desconto = localStorage.getItem('vd') == null ? '0' : localStorage.getItem('vd')
    let adicional = localStorage.getItem('va') == null ? '0' : localStorage.getItem('va')
    let acrescimo = localStorage.getItem('vpr') == null ? '0' : localStorage.getItem('vpr')
    var subtotal = parseFloat(suite) + parseFloat(adicional) + parseFloat(comanda) + parseFloat(acrescimo) - parseFloat(desconto)
    $("#totalGeral").text(parseFloat(subtotal).toFixed(2))
}, 1000);

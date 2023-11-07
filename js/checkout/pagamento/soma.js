setInterval(() => {
    var suitex = $("#suiteEncerrando").text()
    let comanda = localStorage.getItem(`vc${suitex}`) == null ? '0' : localStorage.getItem(`vc${suitex}`)
    let suite = localStorage.getItem(`vs${suitex}`) == null ? '0' : localStorage.getItem(`vs${suitex}`)
    let desconto = localStorage.getItem(`vd${suitex}`) == null ? '0' : localStorage.getItem(`vd${suitex}`)
    let adicional = localStorage.getItem(`va${suitex}`) == null ? '0' : localStorage.getItem(`va${suitex}`)
    let acrescimo = localStorage.getItem(`vpr${suitex}`) == null ? '0' : localStorage.getItem(`vpr${suitex}`)
    var subtotal = parseFloat(suite) + parseFloat(adicional) + parseFloat(comanda) + parseFloat(acrescimo) - parseFloat(desconto)
    console.log(subtotal)
    $("#totalGeral").text(parseFloat(subtotal).toFixed(2))
}, 1000);

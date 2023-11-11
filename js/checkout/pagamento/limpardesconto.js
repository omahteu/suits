$(document).on("click", "#limpar_desconto", function() {
    let suite = localStorage.getItem("last")
    $("#valorDesconto").text('0')
    localStorage.removeItem(`vd${suite}`)
})

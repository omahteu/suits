$(document).on("click", "#limpar_desconto", function() {
    $("#valorDesconto").text('0')
    localStorage.removeItem('vd')
})

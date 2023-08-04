$(document).on("click", "#e_camareiras", function (e) {
    e.preventDefault()
    var divTabela = document.getElementById("camareiras")
    var dados = new Blob(['\ufeff' + divTabela.outerHTML], { type: 'application/vnd.ms-excel' })
    var url = window.URL.createObjectURL(dados)
    var a = document.createElement('a')
    a.href = url
    a.download = "relatorioCamareiras"
    a.click()
})

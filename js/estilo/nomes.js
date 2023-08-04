$(document).ready(function() {
    let hoje = new Date()
    let hora = hoje.getHours()
    let nome = localStorage.getItem('nome')
    if(hora >= 0 && hora < 12){
        $("#saudacao_usuario").text(`Bom Dia, ${nome}`)
    } else if(hora >= 12 && hora < 18) {
        $("#saudacao_usuario").text(`Boa Tarde, ${nome}`)
    } else {
        $("#saudacao_usuario").text(`Boa Noite, ${nome}`)
    }
})

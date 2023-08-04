import { ir, voltar } from "../automacao/testando.js"

$(document).on("click", "#teste_placa", function(){
    let placa = $("#lista_placa :selected").text()
    if (placa == "placa"){
        alert("Selecione uma placa, ou Cadastre alguma!")
    } else {
        ir(placa)
        setTimeout(() => {voltar(placa)}, 1000)
    }
})

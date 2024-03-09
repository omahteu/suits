import padraoDash from "../assets/padrao.js"
import veiculo from "../assets/registrarVeiculo.js"
import remover from "../assets/removerVeiculo.js"

$(document).on('click', '[class="card"]', function () {
    padraoDash(this)
})

$(document).on("click", "#registrar_veiculo", function() {
    veiculo()
})

$(document).on("click", "#remocaoVeiculo", function(){
    remover()
})

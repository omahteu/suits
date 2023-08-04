import {ligar_luz} from "../automacao/ligar.js"
import {desligar_luz} from "../automacao/desligar.js"


$(document).on("click", "#kds", function(ev) {
    ev.preventDefault();
    let suite = $("#menu_cloud").attr("data-toggle").split(",")[1]
    let acao = $("#acao").val()
    acao == "1" ? ligar_luz(suite) : desligar_luz(suite)
    alert("Alterado com Sucesso")
    setTimeout(() => {
        $( "#formCloud" ).trigger( "submit" );
    }, 1000);
});

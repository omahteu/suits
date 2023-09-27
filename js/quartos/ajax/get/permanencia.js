// import link from "../../../setup/index.js"
import { hora_atual_segundos } from "../../../geradores/hora.js"
import receber from "../../auxiliares/funcao4.js"

export function recupera_permanencia(suite){
    let base = receber("offs")
    var dados = base.filter(e => e.suite == suite)
    dados.forEach(e => {
        var z1 = moment(hora_atual_segundos(), "HH:mm:ss").diff(moment(e.datahora, "HH:mm:ss"));
        var z2 = moment.duration(z1);
        var z3 = Math.floor(z2.asHours()) + moment.utc(z1).format(":mm:ss");
        $("#tempoPermanencia").text(z3)
    })
}

import { hora_atual_segundos } from "../geradores/hora.js"
import { data_atual } from "../geradores/data.js";
import salvar from "../olivia/salva.js"

var lp = []

function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
        let agora = hora_atual_segundos()
        let inicio = $(lp).get(-1)
        let nome = localStorage.getItem("nome")
        var m1 = moment(agora, "HH:mm:ss").diff(moment(inicio, "HH:mm:ss"));
        var m2 = moment.duration(m1);
        var m3 = Math.floor(m2.asHours()) + moment.utc(m1).format(":mm:ss");
        var dados = {
            tempo: m3,
            nome: nome,
            data: data_atual()
        }
       salvar(link[0], dados)
    } else {
        lp.push(hora_atual_segundos())
        location.reload()
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);

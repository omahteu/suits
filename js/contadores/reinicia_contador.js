// import link from "../setup/index.js"
import { hora_atual_segundos } from "../geradores/hora.js"
import { play } from "../setup/start_relogios.js"
import receber from "../quartos/auxiliares/funcao4.js"

$(window).on("load", function () {
    setTimeout(() => {
        let offs = receber("offs")
        offs.forEach(e => {
            let inicio = e.hora
            let tipo = e.tipo
            let suite = e.suite
            if (tipo != "aguardando") {
                let agora = hora_atual_segundos()
                var ms = moment(agora, "HH:mm:ss").diff(moment(inicio, "HH:mm:ss"));
                var d = moment.duration(ms);
                var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
                var stp = tempoPassado.split(":")
                play[suite](suite, stp[0], stp[1], stp[2])
            } else {
                let pausado = localStorage.getItem(`_${suite}`)
                $(`#hora${suite}`).text(pausado.split(",")[0])
                $(`#minuto${suite}`).text(pausado.split(",")[1])
                $(`#segundo${suite}`).text(pausado.split(",")[2])
            }
        });
    }, 1000);
})

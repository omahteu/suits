// import link from "../setup/index.js"
import { hora_atual_segundos } from "../geradores/hora.js"
import { play } from "../setup/start_relogios.js"
import receber from "../quartos/auxiliares/funcao4.js"

var rr = ["aguardando", "apagamento"]

function formatarHora(fracoesDeHora) {
    const horas = Math.floor(fracoesDeHora);
    const minutos = Math.floor((fracoesDeHora - horas) * 60);
    const segundos = Math.round(((fracoesDeHora - horas) * 60 - minutos) * 60);
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  }

$(window).on("load", function () {
    setTimeout(() => {
        let offs = receber("offs")
        offs.forEach(e => {
            let inicio = e.hora
            let tipo = e.tipo
            let suite = e.suite
            if (!rr.includes(tipo)) {
                let agora = hora_atual_segundos()

                const horaInicial = moment(String(inicio), 'HH:mm:ss');
                const horaAtual = moment(String(agora), 'HH:mm:ss');

                if (horaAtual.isBefore(horaInicial)) {
                    horaAtual.add(1, 'day');
                }

                const diferenca = moment.duration(horaAtual.diff(horaInicial));

                const horasDiferenca = diferenca.hours();
                const minutosDiferenca = diferenca.minutes();
                const segundosDiferenca = diferenca.seconds();

                const logo = moment({
                    hours: horasDiferenca,
                    minutes: minutosDiferenca,
                    seconds: segundosDiferenca
                });

                play[suite](suite, horasDiferenca, minutosDiferenca, segundosDiferenca)
            } else {
                let pausado = localStorage.getItem(`_${suite}`)
                $(`#hora${suite}`).text(pausado.split(",")[0])
                $(`#minuto${suite}`).text(pausado.split(",")[1])
                $(`#segundo${suite}`).text(`${pausado.split(",")[2]}`)
            }
        });
    }, 1500);
})

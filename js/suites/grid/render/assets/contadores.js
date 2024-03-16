import { hora_atual_segundos } from "../../../../geradores/hora.js"
// import { play } from "../../../../setup/start_relogios.js"
import receber from "../../../../quartos/auxiliares/funcao4.js"
import { inicia } from "../../../../contadores/relogio.js";

const rr = ["aguardando", "apagamento"];

export default function contador() {
    console.time("contador")
    const offs = receber("offs");
    
    offs.forEach(off => {
        const { hora: inicio, tipo, suite } = off;
        
        if (!rr.includes(tipo)) {
            atualizarTempoExecucao(inicio, suite);
        } else {
            atualizarTempoPausado(suite);
        }
    });
    console.timeEnd("contador")
}

function atualizarTempoExecucao(inicio, suite) {
    const agora = hora_atual_segundos();
    const horaInicial = moment(String(inicio), 'HH:mm:ss');
    let horaAtual = moment(String(agora), 'HH:mm:ss');

    if (horaAtual.isBefore(horaInicial)) {
        horaAtual.add(1, 'day');
    }

    const diferenca = moment.duration(horaAtual.diff(horaInicial));
    const horasDiferenca = diferenca.hours();
    const minutosDiferenca = diferenca.minutes();
    const segundosDiferenca = diferenca.seconds();

    // play[suite](suite, horasDiferenca, minutosDiferenca, segundosDiferenca)
    inicia(suite, horasDiferenca, minutosDiferenca, segundosDiferenca)
}

function atualizarTempoPausado(suite) {
    const pausado = localStorage.getItem(`_${suite}`);
    const [horaPausada, minutoPausado, segundoPausado] = pausado.split(",");

    $(`#hora${suite}`).text(horaPausada);
    $(`#minuto${suite}`).text(minutoPausado);
    $(`#segundo${suite}`).text(segundoPausado);
}

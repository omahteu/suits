import { RAIZ } from "../raiz.js"
import { data_atual } from "../geradores/data.js"

$(window).on("load", function () {
    listaOcupacoes()
})

async function listaOcupacoes() {
    let usuario = localStorage.getItem('nome')

    const dataAtual = moment();
    const dataOntem = dataAtual.subtract(1, 'days');
    let ontem = dataOntem.format('DD/MM/YYYY')

    const limiteHora = moment("19:00:00", "HH:mm:ss");
    const limiteorra = moment("07:00:00", "HH:mm:ss")

    const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/ocupacoes.php`)
    const rt = await rq.json()
    if (rt["status"]) {
        let ocupacoesUsuario = rt['dados'].filter(
            x =>
                x.usuario == usuario &&
                x.forma == "Dinheiro" ||
                x.forma == "PIX" ||
                x.forma == "Débito Mastercard - 4%" ||
                x.forma == "Crédito Mastercard - 4%"
        )
        var ocupacoes = document.getElementById('tabelaHomeOcupacoes')
        ocupacoes.innerHTML = ''
        ocupacoesUsuario.forEach(e => {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
                moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
            ) {
                if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                    moment(e.entrada, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss")) ||
                    moment(e.entrada, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
                ) {
                    ocupacoes.innerHTML += '<tr>' +
                        `<td>${e.data}</td>` +
                        `<td>${e.codigo}</td>` +
                        `<td>${e.suite}</td>` +
                        `<td>${e.entrada}</td>` +
                        `<td>${e.saida}</td>` +
                        `<td>${e.total}</td>` +
                        '</tr>'
                } else if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day')
                ) {
                    ocupacoes.innerHTML += '<tr>' +
                        `<td>${e.data}</td>` +
                        `<td>${e.codigo}</td>` +
                        `<td>${e.suite}</td>` +
                        `<td>${e.entrada}</td>` +
                        `<td>${e.saida}</td>` +
                        `<td>${e.total}</td>` +
                        '</tr>'
                }
            }
        });
    }
}

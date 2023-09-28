import link from "../setup/index.js"
import { hora_atual_segundos } from "../geradores/hora.js"
import pernoite from "../tags/pernoite.js"
import locado from "../tags/locacao.js"
import { insereValor } from "./ajax/inserir.js"
import receber from "../quartos/auxiliares/funcao4.js"
import alterar from "../olivia/altera.js"
import { play } from "../setup/start_relogios.js"
import { clean } from "../setup/clean_relogios.js"
import {RAIZ} from "../raiz.js"

setInterval(() => {
    comecando_pernoite()
}, 1000)

async function comecando_pernoite() {
    const i1 = receber("dados_suites")
    const i2 = receber("tabela_precos")
    const i3 = receber("offs")

    const rq = await fetch(link[35])
    const rs = await rq.json()

    const rq2 = await fetch(link[34])
    const rs2 = await rq2.json()

    rs.forEach(e => {
        let tipo = e.tipoPernoite
        let comeca = e.inicioPernoite
        let fim = e.fimPernoite
        let permanencia = parseInt(e.permanenciaPernoite)
        let seAutomatica = tipo == "1"
        let seFixa = tipo == "2"

        if (seAutomatica) {
            i3.forEach(ele => {
                // Tolerância
                let ficha = i1.filter(i => i.numeroSuite == ele.suite)
                let tlrnc = parseInt(ficha[0].toleranciaSuite)

                if (ele.tipo != "pernoite") {
                    // Valor
                    let codig = parseInt(ficha[0].codigoSuite)
                    let fich2 = i2.filter(x => x.codigo == codig)

                    // Cálculo
                    let z1 = hora_atual_segundos()
                    var z2 = moment(z1, "HH:mm:ss").diff(moment(ele.datahora, "HH:mm:ss"));
                    var z3 = moment.duration(z2);

                    // Tratamento
                    var tempoPassado = Math.floor(z3.asHours()) + moment.utc(z2).format(":mm:ss");
                    let horaPassada = parseInt(tempoPassado.slice(0, 2).split(/\D+/).join(""), 10)
                    let minutoPassado = parseInt(tempoPassado.slice(2, 4))

                    if (horaPassada >= permanencia) {
                        if (minutoPassado > tlrnc) {
                            ativar(ele.id, ele.suite, hora_atual_segundos(), ele.valor, fich2[0].pernoite)
                        }
                    }
                } else if (ele.tipo == "pernoite") {

                    // Cálculo
                    var ms = moment(hora_atual_segundos(), "HH:mm:ss").diff(moment(ele.datahora, "HH:mm:ss"));
                    var d = moment.duration(ms);
                    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

                    let passou = s.split(":")

                    if (parseInt(passou[0]) > parseInt(permanencia)) {
                        desativar(ele.id, ele.suite, hora_atual_segundos(), ele.valor)
                    } else if (parseInt(passou[0]) == parseInt(permanencia)) {
                        if (parseInt(passou[1]) > parseInt(tlrnc)) {
                            desativar(ele.id, ele.suite, hora_atual_segundos(), ele.valor)
                        }
                    }
                }
            })
        } else if (seFixa) {
            i3.forEach(ili => {
                // Tolerância
                let ficha = i1.filter(i => i.numeroSuite == ili.suite)
                let tlrnc = parseInt(ficha[0].toleranciaSuite)

                if (ili.tipo != "pernoite") {
                    // Valor
                    let codig = parseInt(ficha[0].codigoSuite)
                    let fich2 = i2.filter(x => x.codigo == codig)

                    // Cálculo
                    var ms = moment(`${comeca}:00`, "HH:mm:ss").diff(moment(hora_atual_segundos(), "HH:mm:ss"));
                    var d = moment.duration(ms);
                    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

                    // Tratamento
                    let resta = s.split(":")

                    console.log(resta)

                    if (resta[0] <= -1) {
                        if (resta[1] * -1 > tlrnc - 60) {
                            ativar(ili.id, ili.suite, hora_atual_segundos(), ili.valor, fich2[0].pernoite)
                        }
                    }

                } else if (ili.tipo == "pernoite") {
                    // Cálculo
                    var ms = moment(hora_atual_segundos(), "HH:mm:ss").diff(moment(`${fim}:00`, "HH:mm:ss"));
                    var d = moment.duration(ms);
                    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

                    // Tratamento
                    let resta = s.split(":")

                    console.log(`resta fechar | ${resta}`)

                    if (resta[0] >= 0) {
                        if (resta[1] >= tlrnc + 1) {
                            desativar(ili.id, ili.suite, hora_atual_segundos(), ili.valor)
                        }
                    }
                }
            })
        }
    })
}

function ativar(id, suite, hora, valor, valorpernoite) {
    pernoite(suite)
    var dados = { datahora: hora, valor: valor, suite: suite, tipo: "pernoite" }
    alterar(`${link[11]}${id}/`, dados)
    insereValor(suite, valorpernoite, "pernoite")
    //registraJaPernoite(suite, hora)
    clean[suite](suite)
    play[suite](suite, "0", "0", "0")
}

function desativar(id, suite, hora, valor) {
    locado(suite)
    var dados = { datahora: hora, valor: valor, suite: suite, tipo: "locado" }
    alterar(`${link[11]}${id}/`, dados)
    insereValor(suite, valor, "locacao")
    clean[suite](suite)
    play[suite](suite, "0", "0", "0")
}

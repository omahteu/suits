import { hora_atual_segundos } from "../../geradores/hora.js";
import { alterarValor } from "../../quartos/ajax/alterar.js";
import receber from "../../quartos/auxiliares/funcao4.js";
import { RAIZ } from "../../raiz.js";
import { insereValor } from "../../pernoite/ajax/inserir.js";
import pernoite from "../../tags/pernoite.js";
import alterar from "../../olivia/altera.js";
import salvar from "../../olivia/salva.js";

let tiposSuites = ['manutencao', 'faxina', 'limpeza', 'revisao', 'aguardando', 'apagamento', 'locado']

$(document).on("click", '[class="card"]', function () {
    var lv = $(this);
    var lv2 = $(lv[0].children[0]);
    var lv3 = $(lv2[0].children[1]);
    var lv4 = lv3.text();
    atualizaValores(lv4);
});

function atualizaValores(suite) {
    try {
        var alugados = receber("offs");
        var suites = receber("dados_suites");
        var precos = receber("tabela_precos");
        var se_alugado_dados = suites.filter((e) => e.numeroSuite == suite);
        var tolerancia = parseInt(se_alugado_dados[0].toleranciaSuite);
        var modo_cobranca = se_alugado_dados[0].cobrancaSuite;
        if (modo_cobranca == "hora") {
            let funil = alugados.filter((x) => x.suite == suite);
            let iniciado = funil[0].hora;
            const horarioRegistrado = moment(iniciado, "HH:mm:ss");
            let funil_suites = suites.filter((o) => o.numeroSuite == funil[0].suite);
            let funil_precos = precos.filter((u) => u.codigo == funil_suites[0].codigoSuite);
            function verificarHoraPassada() {

                const horaAtual = moment();
                const diferencaEmHoras = horaAtual.diff(horarioRegistrado, "hours");

                const diferencaSegundos = horaAtual.diff(horarioRegistrado, "seconds");
                const minutos = Math.floor((diferencaSegundos % 3600) / 60);


                

                const horaInicial = moment(String(horarioRegistrado), 'HH:mm:ss');
                if (horaAtual.isBefore(horaInicial)) {
                    horaAtual.add(1, 'day');
                }

                const diferenca = moment.duration(horaAtual.diff(horaInicial));
                const horasDiferenca = diferenca.hours();
                const minutosDiferenca = diferenca.minutes();
                const segundosDiferenca = diferenca.seconds();

                console.log(horasDiferenca)
                console.log(minutosDiferenca)
                console.log(segundosDiferenca)




                if (diferencaEmHoras > 0 && diferencaEmHoras <= 1 && minutos > tolerancia) {
                    alterarValor(suite, funil_precos[0].vh2);
                } else if (diferencaEmHoras > 1 && diferencaEmHoras <= 2 && minutos > tolerancia) {
                    alterarValor(suite, funil_precos[0].vh3);
                } else if (diferencaEmHoras > 2 && diferencaEmHoras <= 3 && minutos > tolerancia) {
                    alterarValor(suite, funil_precos[0].vh4);
                } else if (diferencaEmHoras > 3 && diferencaEmHoras <= 4 && minutos > tolerancia) {
                    comecando_pernoite(suite)
                } else if (diferencaEmHoras > 4 && diferencaEmHoras <= 5 && minutos > tolerancia) {
                    // não cobra
                    // alterarValor(suite, funil_precos[0].vh6);
                } else if (diferencaEmHoras > 5 && diferencaEmHoras <= 6 && minutos > tolerancia) {
                    // não cobra
                    // alterarValor(suite, parseFloat(parseInt(funil_precos[0].vh6) + 10).toFixed(2));
                } else if (diferencaEmHoras > 6 && diferencaEmHoras <= 7 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 10).toFixed(2));
                } else if (diferencaEmHoras > 7 && diferencaEmHoras <= 8 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 20).toFixed(2));
                } else if (diferencaEmHoras > 8 && diferencaEmHoras <= 9 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 30).toFixed(2));
                } else if (diferencaEmHoras > 9 && diferencaEmHoras <= 10 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 40).toFixed(2));
                } else if (diferencaEmHoras > 10 && diferencaEmHoras <= 11 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 50).toFixed(2));
                } else if (diferencaEmHoras > 11 && diferencaEmHoras <= 12 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 60).toFixed(2));
                } else if (diferencaEmHoras > 12 && diferencaEmHoras <= 13 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 70).toFixed(2));
                } else if (diferencaEmHoras > 13 && diferencaEmHoras <= 14 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 80).toFixed(2));
                } else if (diferencaEmHoras > 14 && diferencaEmHoras <= 15 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 90).toFixed(2));
                } else if (diferencaEmHoras > 15 && diferencaEmHoras <= 16 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 100).toFixed(2));
                } else if (diferencaEmHoras > 16 && diferencaEmHoras <= 17 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 110).toFixed(2));
                } else if (diferencaEmHoras > 17 && diferencaEmHoras <= 18 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 120).toFixed(2));
                } else if (diferencaEmHoras > 18 && diferencaEmHoras <= 19 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 130).toFixed(2));
                } else if (diferencaEmHoras > 19 && diferencaEmHoras <= 20 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 140).toFixed(2));
                } else if (diferencaEmHoras > 20 && diferencaEmHoras <= 21 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 150).toFixed(2));
                } else if (diferencaEmHoras > 21 && diferencaEmHoras <= 22 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 160).toFixed(2));
                } else if (diferencaEmHoras > 22 && diferencaEmHoras <= 23 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 170).toFixed(2));
                } else if (diferencaEmHoras > 23 && diferencaEmHoras <= 24 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 180).toFixed(2));
                } else if (diferencaEmHoras > 24 && diferencaEmHoras <= 25 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 190).toFixed(2));
                } else if (diferencaEmHoras > 25 && diferencaEmHoras <= 26 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 200).toFixed(2));
                } else if (diferencaEmHoras > 26 && diferencaEmHoras <= 27 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 210).toFixed(2));
                } else if (diferencaEmHoras > 27 && diferencaEmHoras <= 28 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 220).toFixed(2));
                } else if (diferencaEmHoras > 28 && diferencaEmHoras <= 29 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 230).toFixed(2));
                } else if (diferencaEmHoras > 29 && diferencaEmHoras <= 30 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 240).toFixed(2));
                } else if (diferencaEmHoras > 30 && diferencaEmHoras <= 31 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 250).toFixed(2));
                } else if (diferencaEmHoras > 31 && diferencaEmHoras <= 32 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 260).toFixed(2));
                } else if (diferencaEmHoras > 32 && diferencaEmHoras <= 33 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 270).toFixed(2));
                } else if (diferencaEmHoras > 33 && diferencaEmHoras <= 34 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 280).toFixed(2));
                } else if (diferencaEmHoras > 34 && diferencaEmHoras <= 35 && minutos > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 290).toFixed(2));
                }
            }
            setTimeout(() => {
                verificarHoraPassada();
            }, 1000);
        } else if (modo_cobranca == "fixa") {
            let funil = alugados.filter((x) => x.suite == suite);
            let iniciado = funil[0].hora;
            let horarioRegistrado = moment(iniciado, "HH:mm:ss");
            let funil_suites = suites.filter(
                (o) => o.numeroSuite == funil[0].suite
            );
            let funil_precos = precos.filter(
                (u) => u.codigo == funil_suites[0].codigoSuite
            );
            function verificarHoraPassada() {
                const horaAtual = moment();
                const diferencaEmHoras = horaAtual.diff(
                    horarioRegistrado,
                    "hours"
                );

                const diferencaSegundos = horaAtual.diff(
                    horarioRegistrado,
                    "seconds"
                );
                const minutos = Math.floor((diferencaSegundos % 3600) / 60);

                if (
                    diferencaEmHoras >= 0 &&
                    diferencaEmHoras < 1 &&
                    minutos > tolerancia
                ) {
                    alterarValor(suite, parseInt(funil_precos[0].locacao) * 2);
                } else if (
                    diferencaEmHoras >= 1 &&
                    diferencaEmHoras < 2 &&
                    minutos > tolerancia
                ) {
                    alterarValor(suite, parseInt(funil_precos[0].locacao) * 3);
                } else if (
                    diferencaEmHoras >= 2 &&
                    diferencaEmHoras < 3 &&
                    minutos > tolerancia
                ) {
                    alterarValor(suite, parseInt(funil_precos[0].locacao) * 4);
                } else if (
                    diferencaEmHoras >= 3 &&
                    diferencaEmHoras < 4 &&
                    minutos > tolerancia
                ) {
                    alterarValor(suite, parseInt(funil_precos[0].locacao) * 5);
                } else if (
                    diferencaEmHoras >= 4 &&
                    diferencaEmHoras < 5 &&
                    minutos > tolerancia
                ) {
                    alterarValor(suite, parseInt(funil_precos[0].locacao) * 6);
                } else if (
                    diferencaEmHoras >= 5 &&
                    diferencaEmHoras < 6 &&
                    minutos > tolerancia
                ) {
                    alterarValor(suite, parseInt(funil_precos[0].locacao) * 7);
                } else if (
                    diferencaEmHoras >= 6 &&
                    diferencaEmHoras < 7 &&
                    minutos > tolerancia
                ) {
                    alterarValor(suite, parseInt(funil_precos[0].locacao) * 8);
                } else if (
                    diferencaEmHoras >= 7 &&
                    diferencaEmHoras < 8 &&
                    minutos > tolerancia
                ) {
                    comecando_pernoite();
                }
            }
            setTimeout(() => {
                verificarHoraPassada();
            }, 1000);
        }
    } catch (error) {
        sessionStorage.setItem("porHora.js", `[LOGS] | ${error}`);
    }
}

async function comecando_pernoite(suite) {
    const i1 = receber("dados_suites");
    const i2 = receber("tabela_precos");
    const i3 = receber("offs");
    const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/pernoite.php`); // pernoite
    const rs = await rq.json();
    if (rs["status"]) {
        rs["dados"].forEach((e) => {
            let tipo = e.tipoPernoite;
            let seAutomatica = tipo == "1";
            let seFixa = tipo == "2";
            if (seAutomatica) {

                let SuitePostu = i3.filter(mu => mu.suite == suite)

                if (SuitePostu[0].tipo === "locado") {
                    let ficha = i1.filter((i) => i.numeroSuite == suite);
                    let codig = ficha[0].codigoSuite;
                    let fich2 = i2.filter((x) => x.codigo == codig);
                    ativar(suite, fich2[0].pernoite);
                }

                // i3.forEach((ele) => {
                    
                //     if (ele.tipo == "locado") {
                        
                        
                        
                //     }
                // });
            } else if (seFixa) {
                i3.forEach((ili) => {
                    let ficha = i1.filter((i) => i.numeroSuite == ili.suite);
                    if (ili.tipo != "pernoite") {
                        let codig = ficha[0].codigoSuite;
                        let fich2 = i2.filter((x) => x.codigo == codig);
                        ativar(ele.suite, fich2[0].pernoite);
                    }
                });
            }
        });
    }
}

function ativar(suite, valorpernoite) {
    // let ocupacoes = receber('offs')
    // let ocupacao = ocupacoes.filter(gt => gt.suite = suite)

    setTimeout(() => {
        let card = "antigo=" + suite + "&novo=" + valorpernoite
        salvar(`http://${RAIZ}/suits/php/suites/editarcofrep.php`, card)
    }, 500);

    pernoite(suite);
    let dados2 = "suite=" + suite + "&tipo=" + "pernoite"
    alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados2);
    // insereValor(suite, valorpernoite, "pernoite");
    setTimeout(() => {
        let box = "suite=" + suite + "&modo=" + "p" + "&tipo=" + "per" + "&horario=" + hora_atual_segundos();
        salvar(`http://${RAIZ}/suits/php/suites/tarefas.php`, box);
    }, 1000);
}


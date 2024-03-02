import { hora_atual_segundos } from "../../../geradores/hora.js";
import alterarValor from "../../../quartos/ajax/alterar.js";
import receber from "../../../quartos/auxiliares/funcao4.js";
import { RAIZ } from "../../../raiz.js";
// import { insereValor } from "../../pernoite/ajax/inserir.js";
import pernoite from "../../../tags/pernoite.js";
import alterar from "../../../olivia/altera.js";
import salvar from "../../../olivia/salva.js";
import make_url from "../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";



export default function atualizaValorSuite(index) {

    try {

        const alugados = receber("offs");
        const suites = receber("dados_suites");
        const precos = receber("tabela_precos");

        const suiteFiltrada = suites.filter(suite => suite.numeroSuite == index);
        const tolerancia = parseInt(suiteFiltrada[0].toleranciaSuite);
        const modoCobranca = suiteFiltrada[0].cobrancaSuite;

     
        if (modoCobranca == "hora") {
  

            const funil = alugados.find(x => x.suite === index);
            const iniciado = funil.hora;
            const funilSuite = suites.find(o => o.numeroSuite === funil.suite);
            const funilPrecos = precos.find(u => u.codigo === funilSuite.codigoSuite);

            function verificarHoraPassada() {

                const agora = hora_atual_segundos();
                const horaInicial = moment(iniciado, 'HH:mm:ss');
                const horaAtual = moment(agora, 'HH:mm:ss');

                if (horaAtual.isBefore(horaInicial)) {
                    horaAtual.add(1, 'day');
                }

                const diferenca = moment.duration(horaAtual.diff(horaInicial));
                const horasDiferenca = diferenca.hours();
                const minutosDiferenca = diferenca.minutes();

                console.log(`HORAS DIFERENÇA | ${horasDiferenca}`)
                console.log(`MINUTOS DIFERENÇA | ${minutosDiferenca}`)
                console.log(`TOLERANCIA | ${tolerancia}`)
                console.log('-------------------------------------------------------------------------------------------------------------------')

                console.log(horasDiferenca > 0 && horasDiferenca <= 24)
                console.log(minutosDiferenca > tolerancia)
                console.log(funilPrecos)

                if (horasDiferenca > 0 && horasDiferenca <= 1 && minutosDiferenca > tolerancia) {
                    alterarValor(index, funilPrecos.vh2);
                } else if (horasDiferenca > 1 && horasDiferenca <= 2 && minutosDiferenca > tolerancia) {
                    alterarValor(index, funilPrecos.vh3);
                } else if (horasDiferenca > 2 && horasDiferenca <= 3 && minutosDiferenca > tolerancia) {
                    alterarValor(index, funilPrecos.vh4);
                } else if (horasDiferenca > 3 && horasDiferenca <= 4 && minutosDiferenca > tolerancia) {
                    comecandoPernoite(index)
                } else if (horasDiferenca > 6 && horasDiferenca <= 7 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 10).toFixed(2));
                } else if (horasDiferenca > 7 && horasDiferenca <= 8 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 20).toFixed(2));
                } else if (horasDiferenca > 8 && horasDiferenca <= 9 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 30).toFixed(2));
                } else if (horasDiferenca > 9 && horasDiferenca <= 10 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 40).toFixed(2));
                } else if (horasDiferenca > 10 && horasDiferenca <= 11 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 50).toFixed(2));
                } else if (horasDiferenca > 11 && horasDiferenca <= 12 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 60).toFixed(2));
                } else if (horasDiferenca > 12 && horasDiferenca <= 13 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 70).toFixed(2));
                } else if (horasDiferenca > 13 && horasDiferenca <= 14 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 80).toFixed(2));
                } else if (horasDiferenca > 14 && horasDiferenca <= 15 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 90).toFixed(2));
                } else if (horasDiferenca > 15 && horasDiferenca <= 16 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 100).toFixed(2));
                } else if (horasDiferenca > 16 && horasDiferenca <= 17 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 110).toFixed(2));
                } else if (horasDiferenca > 17 && horasDiferenca <= 18 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 120).toFixed(2));
                } else if (horasDiferenca > 18 && horasDiferenca <= 19 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 130).toFixed(2));
                } else if (horasDiferenca > 19 && horasDiferenca <= 20 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 140).toFixed(2));
                } else if (horasDiferenca > 20 && horasDiferenca <= 21 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 150).toFixed(2));
                } else if (horasDiferenca > 21 && horasDiferenca <= 22 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 160).toFixed(2));
                } else if (horasDiferenca > 22 && horasDiferenca <= 23 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 170).toFixed(2));
                } else if (horasDiferenca > 23 && horasDiferenca <= 24 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 180).toFixed(2));
                } else if (horasDiferenca > 24 && horasDiferenca <= 25 && minutosDiferenca > tolerancia) {
                    alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 190).toFixed(2));
                }
            }

            // APÓS 24H A SUITE VAI ENCERRAR, E CASO O CLIENTE AINDA PERMANEÇA, PRECISARÁ INICIAR NOVAMENTE, OU INICIARÁ AUTOMATICAMENTE.

            setTimeout(() => {
                verificarHoraPassada();
            }, 1000);
        } else if (modoCobranca == "fixa") {
            let funil = alugados.filter((x) => x.suite == index);
            let iniciado = funil[0].hora;
            let horarioRegistrado = moment(iniciado, "HH:mm:ss");
            let funilSuite = suites.filter(
                (o) => o.numeroSuite == funil[0].suite
            );
            let funilPrecos = precos.filter(
                (u) => u.codigo == funilSuite[0].codigoSuite
            );
            function verificarHoraPassada() {
                const horaAtual = moment();
                const horasDiferenca = horaAtual.diff(
                    horarioRegistrado,
                    "hours"
                );

                const diferencaSegundos = horaAtual.diff(
                    horarioRegistrado,
                    "seconds"
                );
                const minutos = Math.floor((diferencaSegundos % 3600) / 60);

                if (
                    horasDiferenca >= 0 &&
                    horasDiferenca < 1 &&
                    minutos > tolerancia
                ) {
                    alterarValor(index, parseInt(funilPrecos[0].locacao) * 2);
                } else if (
                    horasDiferenca >= 1 &&
                    horasDiferenca < 2 &&
                    minutos > tolerancia
                ) {
                    alterarValor(index, parseInt(funilPrecos[0].locacao) * 3);
                } else if (
                    horasDiferenca >= 2 &&
                    horasDiferenca < 3 &&
                    minutos > tolerancia
                ) {
                    alterarValor(index, parseInt(funilPrecos[0].locacao) * 4);
                } else if (
                    horasDiferenca >= 3 &&
                    horasDiferenca < 4 &&
                    minutos > tolerancia
                ) {
                    alterarValor(index, parseInt(funilPrecos[0].locacao) * 5);
                } else if (
                    horasDiferenca >= 4 &&
                    horasDiferenca < 5 &&
                    minutos > tolerancia
                ) {
                    alterarValor(index, parseInt(funilPrecos[0].locacao) * 6);
                } else if (
                    horasDiferenca >= 5 &&
                    horasDiferenca < 6 &&
                    minutos > tolerancia
                ) {
                    alterarValor(index, parseInt(funilPrecos[0].locacao) * 7);
                } else if (
                    horasDiferenca >= 6 &&
                    horasDiferenca < 7 &&
                    minutos > tolerancia
                ) {
                    alterarValor(index, parseInt(funilPrecos[0].locacao) * 8);
                } else if (
                    horasDiferenca >= 7 &&
                    horasDiferenca < 8 &&
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
        console.log(error)
    }

}

function comecandoPernoite(index) {
    const suitesData = receber("dados_suites");
    const precosData = receber("tabela_precos");
    const offsData = receber("offs");

    const url = make_url("configuracoes/show", "pernoite.php");

    fazerRequisicaoAjax(url, "GET", null, function(response) {
        try {
            const data = JSON.parse(response);

            if (data.status) {
                data.dados.forEach((pernoiteConfig) => {
                    let tipo = pernoiteConfig.tipoPernoite;
                    let isAutomatica = tipo === "1";
                    let isFixa = tipo === "2";

                    if (isAutomatica) {
                        let suitePostu = offsData.filter(mu => mu.suite == index);

                        if (suitePostu[0].tipo === "locado") {
                            let ficha = suitesData.filter((suite) => suite.numeroSuite == index);
                            let codigo = ficha[0].codigoSuite;
                            let fich2 = precosData.filter((item) => item.codigo == codigo);
                            ativar(index, fich2[0].pernoite);
                        }
                    } else if (isFixa) {
                        offsData.forEach((off) => {
                            let ficha = suitesData.filter((suite) => suite.numeroSuite == off.suite);
                            if (off.tipo !== "pernoite") {
                                let codigo = ficha[0].codigoSuite;
                                let fich2 = precosData.filter((item) => item.codigo == codigo);
                                ativar(off.suite, fich2[0].pernoite);
                            }
                        });
                    }
                });
            } else {
                console.log("Erro na leitura da Pernoite.");
            }
        } catch (error) {
            console.log(error);
        }
    }, function(error) {
        console.log(error);
    });
}

function ativar(index, valorpernoite) {
    // let ocupacoes = receber('offs')
    // let ocupacao = ocupacoes.filter(gt => gt.index = index)

    const urlCofre = make_url()
    const urlInfos = make_url()
    const urlTasks = make_url()

    fazerRequisicaoAjax()
    fazerRequisicaoAjax()
    fazerRequisicaoAjax()


    // setTimeout(() => {
    //     let card = "antigo=" + index + "&novo=" + valorpernoite
    //     salvar(`http://${RAIZ}/suits/php/suites/editarcofrep.php`, card)
    // }, 500);

    // pernoite(index);
    // let dados2 = "suite=" + index + "&tipo=" + "pernoite"
    // alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados2);
    // // insereValor(suite, valorpernoite, "pernoite");
    // setTimeout(() => {
    //     let box = "suite=" + index + "&modo=" + "p" + "&tipo=" + "per" + "&horario=" + hora_atual_segundos();
    //     salvar(`http://${RAIZ}/suits/php/suites/tarefas.php`, box);
    // }, 1000);
}

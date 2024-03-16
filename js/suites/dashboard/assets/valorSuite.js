import { hora_atual_segundos } from "../../../geradores/hora.js";
import alterarValor from "../../../quartos/ajax/alterar.js";
import receber from "../../../quartos/auxiliares/funcao4.js";
import startPernoite from "./pernoite.js";


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


  


                if (horasDiferenca == 1 && minutosDiferenca > tolerancia || horasDiferenca == (1+1) && minutosDiferenca < tolerancia) {
                    alterarValor(index, funilPrecos.vh2)
                }

                if (horasDiferenca == 2 && minutosDiferenca > tolerancia || horasDiferenca == (2+1) && minutosDiferenca < tolerancia) {
                    alterarValor(index, funilPrecos.vh3)
                }

                if (horasDiferenca == 3 && minutosDiferenca > tolerancia || horasDiferenca == (3+1) && minutosDiferenca < tolerancia) {
                    alterarValor(index, funilPrecos.vh4)
                }

                if (horasDiferenca == 4 && minutosDiferenca > tolerancia || horasDiferenca == (4+1) && minutosDiferenca < tolerancia) {
                    startPernoite(index)
                }

                if (horasDiferenca == 7 && minutosDiferenca > tolerancia || horasDiferenca == (7+1) && minutosDiferenca < tolerancia) {
                    const validate = JaDeviaTerAtivadoPernoite(funil)
                    if (!validate) {
                        startPernoite(index)
                    }
                    alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 10).toFixed(2))
                }

                if (horasDiferenca == 8 && minutosDiferenca > tolerancia || horasDiferenca == (8+1) && minutosDiferenca < tolerancia) {
                    const validate = JaDeviaTerAtivadoPernoite(funil)
                    if (!validate) {
                        startPernoite(index)
                    }
                    alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 20).toFixed(2))
                }

                if (horasDiferenca == 9 && minutosDiferenca > tolerancia || horasDiferenca == (9+1) && minutosDiferenca < tolerancia) {
                    const validate = JaDeviaTerAtivadoPernoite(funil)
                    if (!validate) {
                        startPernoite(index)
                    }
                    alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 30).toFixed(2))
                }

                if (horasDiferenca == 10 && minutosDiferenca > tolerancia || horasDiferenca == (10+1) && minutosDiferenca < tolerancia) {
                    const validate = JaDeviaTerAtivadoPernoite(funil)
                    if (!validate) {
                        startPernoite(index)
                    }
                    alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 40).toFixed(2))
                }

                if (horasDiferenca == 11 && minutosDiferenca > tolerancia || horasDiferenca == (11+1) && minutosDiferenca < tolerancia) {
                    const validate = JaDeviaTerAtivadoPernoite(funil)
                    if (!validate) {
                        startPernoite(index)
                    }
                    alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 50).toFixed(2))
                }

                if (horasDiferenca == 12 && minutosDiferenca > tolerancia || horasDiferenca == (12+1) && minutosDiferenca < tolerancia) {
                    const validate = JaDeviaTerAtivadoPernoite(funil)
                    if (!validate) {
                        startPernoite(index)
                    }
                    alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 60).toFixed(2))
                }


                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 70).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 80).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 90).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 100).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 110).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 120).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 130).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 140).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 150).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 160).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 170).toFixed(2))
                //     alterarValor(index, parseFloat(parseInt(funilPrecos.pernoite) + 180).toFixed(2))

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


function JaDeviaTerAtivadoPernoite(data) {
    if (data.tipo == "pernoite") {
        return true
    }
}

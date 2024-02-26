import { hora_atual_segundos } from "../../../geradores/hora.js";
import alterarValor from "../../../quartos/ajax/alterar.js";
import receber from "../../../quartos/auxiliares/funcao4.js";
import { RAIZ } from "../../../raiz.js";
// import { insereValor } from "../../pernoite/ajax/inserir.js";
import pernoite from "../../../tags/pernoite.js";
import alterar from "../../../olivia/altera.js";
import salvar from "../../../olivia/salva.js";



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

            


                if (horasDiferenca > 0 && horasDiferenca <= 35 && minutosDiferenca > tolerancia) {
                    const precoBase = parseInt(funilPrecos.pernoite) + (Math.floor(horasDiferenca / 1) * 10);
    
                    alterarValor(index, parseFloat(precoBase).toFixed(2));
                }
                
            }

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

async function comecando_pernoite(index) {
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

                let SuitePostu = i3.filter(mu => mu.suite == index)

                if (SuitePostu[0].tipo === "locado") {
                    let ficha = i1.filter((i) => i.numeroSuite == index);
                    let codig = ficha[0].codigoSuite;
                    let fich2 = i2.filter((x) => x.codigo == codig);
                    ativar(index, fich2[0].pernoite);
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

function ativar(index, valorpernoite) {
    // let ocupacoes = receber('offs')
    // let ocupacao = ocupacoes.filter(gt => gt.index = index)

    setTimeout(() => {
        let card = "antigo=" + index + "&novo=" + valorpernoite
        salvar(`http://${RAIZ}/suits/php/suites/editarcofrep.php`, card)
    }, 500);

    pernoite(index);
    let dados2 = "suite=" + index + "&tipo=" + "pernoite"
    alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados2);
    // insereValor(suite, valorpernoite, "pernoite");
    setTimeout(() => {
        let box = "suite=" + index + "&modo=" + "p" + "&tipo=" + "per" + "&horario=" + hora_atual_segundos();
        salvar(`http://${RAIZ}/suits/php/suites/tarefas.php`, box);
    }, 1000);
}

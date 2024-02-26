// import { hora_atual_segundos } from "../../geradores/hora.js";
// import { alterarValor } from "../../quartos/ajax/alterar.js";
// import receber from "../../quartos/auxiliares/funcao4.js";
// import { RAIZ } from "../../raiz.js";
// import { insereValor } from "../../pernoite/ajax/inserir.js";
// import pernoite from "../../tags/pernoite.js";
// import alterar from "../../olivia/altera.js";
// import salvar from "../../olivia/salva.js";

// let tiposSuites = ['manutencao', 'faxina', 'limpeza', 'revisao', 'aguardando', 'apagamento', 'locado']

// // $(document).on("click", '[class="card"]', function () {
// //     var lv = $(this);
// //     var lv2 = $(lv[0].children[0]);
// //     var lv3 = $(lv2[0].children[1]);
// //     var lv4 = lv3.text();
// //     atualizaValores(lv4);
// // });

// export default function atualizaValores(suite) {
//     try {

//         var alugados = receber("offs");
//         var suites = receber("dados_suites");
//         var precos = receber("tabela_precos");
//         var se_alugado_dados = suites.filter((e) => e.numeroSuite == suite);
//         var tolerancia = parseInt(se_alugado_dados[0].toleranciaSuite);
//         var modo_cobranca = se_alugado_dados[0].cobrancaSuite;
//         if (modo_cobranca == "hora") {
//             let funil = alugados.filter((x) => x.suite == suite);
//             let iniciado = funil[0].hora;
//             // const horarioRegistrado = moment(iniciado, "HH:mm:ss");
//             let funil_suites = suites.filter((o) => o.numeroSuite == funil[0].suite);
//             let funil_precos = precos.filter((u) => u.codigo == funil_suites[0].codigoSuite);
//             function verificarHoraPassada() {
//                 let agora = hora_atual_segundos()
        
//                 const horaInicial = moment(String(iniciado), 'HH:mm:ss');
//                 const horaAtual = moment(String(agora), 'HH:mm:ss');

//                 if (horaAtual.isBefore(horaInicial)) {
//                     horaAtual.add(1, 'day');
//                 }

//                 // const horasDiferenca = horaAtual.diff(horarioRegistrado, "hours");

//                 // const diferencaSegundos = horaAtual.diff(horarioRegistrado, "seconds");
//                 // const minutos = Math.floor((diferencaSegundos % 3600) / 60);

//                 const diferenca = moment.duration(horaAtual.diff(horaInicial));
//                 const horasDiferenca = diferenca.hours();
//                 const minutosDiferenca = diferenca.minutes();
//                 // const segundosDiferenca = diferenca.seconds();

//                 // console.log(horasDiferenca)
//                 // console.log(minutosDiferenca)
//                 // console.log(segundosDiferenca)




//                 if (horasDiferenca > 0 && horasDiferenca <= 1 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, funil_precos[0].vh2);
//                 } else if (horasDiferenca > 1 && horasDiferenca <= 2 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, funil_precos[0].vh3);
//                 } else if (horasDiferenca > 2 && horasDiferenca <= 3 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, funil_precos[0].vh4);
//                 } else if (horasDiferenca > 3 && horasDiferenca <= 4 && minutosDiferenca > tolerancia) {
//                     comecando_pernoite(suite)
//                 } else if (horasDiferenca > 4 && horasDiferenca <= 5 && minutosDiferenca > tolerancia) {
//                     // não cobra
//                     // alterarValor(suite, funil_precos[0].vh6);
//                 } else if (horasDiferenca > 5 && horasDiferenca <= 6 && minutosDiferenca > tolerancia) {
//                     // não cobra
//                     // alterarValor(suite, parseFloat(parseInt(funil_precos[0].vh6) + 10).toFixed(2));
//                 } else if (horasDiferenca > 6 && horasDiferenca <= 7 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 10).toFixed(2));
//                 } else if (horasDiferenca > 7 && horasDiferenca <= 8 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 20).toFixed(2));
//                 } else if (horasDiferenca > 8 && horasDiferenca <= 9 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 30).toFixed(2));
//                 } else if (horasDiferenca > 9 && horasDiferenca <= 10 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 40).toFixed(2));
//                 } else if (horasDiferenca > 10 && horasDiferenca <= 11 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 50).toFixed(2));
//                 } else if (horasDiferenca > 11 && horasDiferenca <= 12 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 60).toFixed(2));
//                 } else if (horasDiferenca > 12 && horasDiferenca <= 13 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 70).toFixed(2));
//                 } else if (horasDiferenca > 13 && horasDiferenca <= 14 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 80).toFixed(2));
//                 } else if (horasDiferenca > 14 && horasDiferenca <= 15 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 90).toFixed(2));
//                 } else if (horasDiferenca > 15 && horasDiferenca <= 16 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 100).toFixed(2));
//                 } else if (horasDiferenca > 16 && horasDiferenca <= 17 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 110).toFixed(2));
//                 } else if (horasDiferenca > 17 && horasDiferenca <= 18 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 120).toFixed(2));
//                 } else if (horasDiferenca > 18 && horasDiferenca <= 19 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 130).toFixed(2));
//                 } else if (horasDiferenca > 19 && horasDiferenca <= 20 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 140).toFixed(2));
//                 } else if (horasDiferenca > 20 && horasDiferenca <= 21 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 150).toFixed(2));
//                 } else if (horasDiferenca > 21 && horasDiferenca <= 22 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 160).toFixed(2));
//                 } else if (horasDiferenca > 22 && horasDiferenca <= 23 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 170).toFixed(2));
//                 } else if (horasDiferenca > 23 && horasDiferenca <= 24 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 180).toFixed(2));
//                 } else if (horasDiferenca > 24 && horasDiferenca <= 25 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 190).toFixed(2));
//                 } else if (horasDiferenca > 25 && horasDiferenca <= 26 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 200).toFixed(2));
//                 } else if (horasDiferenca > 26 && horasDiferenca <= 27 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 210).toFixed(2));
//                 } else if (horasDiferenca > 27 && horasDiferenca <= 28 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 220).toFixed(2));
//                 } else if (horasDiferenca > 28 && horasDiferenca <= 29 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 230).toFixed(2));
//                 } else if (horasDiferenca > 29 && horasDiferenca <= 30 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 240).toFixed(2));
//                 } else if (horasDiferenca > 30 && horasDiferenca <= 31 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 250).toFixed(2));
//                 } else if (horasDiferenca > 31 && horasDiferenca <= 32 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 260).toFixed(2));
//                 } else if (horasDiferenca > 32 && horasDiferenca <= 33 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 270).toFixed(2));
//                 } else if (horasDiferenca > 33 && horasDiferenca <= 34 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 280).toFixed(2));
//                 } else if (horasDiferenca > 34 && horasDiferenca <= 35 && minutosDiferenca > tolerancia) {
//                     alterarValor(suite, parseFloat(parseInt(funil_precos[0].pernoite) + 290).toFixed(2));
//                 }
//             }
            
//             setTimeout(() => {
//                 verificarHoraPassada();
//             }, 1000);
//         } else if (modo_cobranca == "fixa") {
//             let funil = alugados.filter((x) => x.suite == suite);
//             let iniciado = funil[0].hora;
//             let horarioRegistrado = moment(iniciado, "HH:mm:ss");
//             let funil_suites = suites.filter(
//                 (o) => o.numeroSuite == funil[0].suite
//             );
//             let funil_precos = precos.filter(
//                 (u) => u.codigo == funil_suites[0].codigoSuite
//             );
//             function verificarHoraPassada() {
//                 const horaAtual = moment();
//                 const horasDiferenca = horaAtual.diff(
//                     horarioRegistrado,
//                     "hours"
//                 );

//                 const diferencaSegundos = horaAtual.diff(
//                     horarioRegistrado,
//                     "seconds"
//                 );
//                 const minutos = Math.floor((diferencaSegundos % 3600) / 60);

//                 if (
//                     horasDiferenca >= 0 &&
//                     horasDiferenca < 1 &&
//                     minutos > tolerancia
//                 ) {
//                     alterarValor(suite, parseInt(funil_precos[0].locacao) * 2);
//                 } else if (
//                     horasDiferenca >= 1 &&
//                     horasDiferenca < 2 &&
//                     minutos > tolerancia
//                 ) {
//                     alterarValor(suite, parseInt(funil_precos[0].locacao) * 3);
//                 } else if (
//                     horasDiferenca >= 2 &&
//                     horasDiferenca < 3 &&
//                     minutos > tolerancia
//                 ) {
//                     alterarValor(suite, parseInt(funil_precos[0].locacao) * 4);
//                 } else if (
//                     horasDiferenca >= 3 &&
//                     horasDiferenca < 4 &&
//                     minutos > tolerancia
//                 ) {
//                     alterarValor(suite, parseInt(funil_precos[0].locacao) * 5);
//                 } else if (
//                     horasDiferenca >= 4 &&
//                     horasDiferenca < 5 &&
//                     minutos > tolerancia
//                 ) {
//                     alterarValor(suite, parseInt(funil_precos[0].locacao) * 6);
//                 } else if (
//                     horasDiferenca >= 5 &&
//                     horasDiferenca < 6 &&
//                     minutos > tolerancia
//                 ) {
//                     alterarValor(suite, parseInt(funil_precos[0].locacao) * 7);
//                 } else if (
//                     horasDiferenca >= 6 &&
//                     horasDiferenca < 7 &&
//                     minutos > tolerancia
//                 ) {
//                     alterarValor(suite, parseInt(funil_precos[0].locacao) * 8);
//                 } else if (
//                     horasDiferenca >= 7 &&
//                     horasDiferenca < 8 &&
//                     minutos > tolerancia
//                 ) {
//                     comecando_pernoite();
//                 }
//             }
//             setTimeout(() => {
//                 verificarHoraPassada();
//             }, 1000);
//         }

//     } catch (error) {
//         sessionStorage.setItem("porHora.js", `[LOGS] | ${error}`);
//     }
// }

// async function comecando_pernoite(suite) {
//     const i1 = receber("dados_suites");
//     const i2 = receber("tabela_precos");
//     const i3 = receber("offs");
//     const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/pernoite.php`); // pernoite
//     const rs = await rq.json();
//     if (rs["status"]) {
//         rs["dados"].forEach((e) => {
//             let tipo = e.tipoPernoite;
//             let seAutomatica = tipo == "1";
//             let seFixa = tipo == "2";
//             if (seAutomatica) {

//                 let SuitePostu = i3.filter(mu => mu.suite == suite)

//                 if (SuitePostu[0].tipo === "locado") {
//                     let ficha = i1.filter((i) => i.numeroSuite == suite);
//                     let codig = ficha[0].codigoSuite;
//                     let fich2 = i2.filter((x) => x.codigo == codig);
//                     ativar(suite, fich2[0].pernoite);
//                 }

//                 // i3.forEach((ele) => {
                    
//                 //     if (ele.tipo == "locado") {
                        
                        
                        
//                 //     }
//                 // });
//             } else if (seFixa) {
//                 i3.forEach((ili) => {
//                     let ficha = i1.filter((i) => i.numeroSuite == ili.suite);
//                     if (ili.tipo != "pernoite") {
//                         let codig = ficha[0].codigoSuite;
//                         let fich2 = i2.filter((x) => x.codigo == codig);
//                         ativar(ele.suite, fich2[0].pernoite);
//                     }
//                 });
//             }
//         });
//     }
// }

// function ativar(suite, valorpernoite) {
//     // let ocupacoes = receber('offs')
//     // let ocupacao = ocupacoes.filter(gt => gt.suite = suite)

//     setTimeout(() => {
//         let card = "antigo=" + suite + "&novo=" + valorpernoite
//         salvar(`http://${RAIZ}/suits/php/suites/editarcofrep.php`, card)
//     }, 500);

//     pernoite(suite);
//     let dados2 = "suite=" + suite + "&tipo=" + "pernoite"
//     alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados2);
//     // insereValor(suite, valorpernoite, "pernoite");
//     setTimeout(() => {
//         let box = "suite=" + suite + "&modo=" + "p" + "&tipo=" + "per" + "&horario=" + hora_atual_segundos();
//         salvar(`http://${RAIZ}/suits/php/suites/tarefas.php`, box);
//     }, 1000);
// }


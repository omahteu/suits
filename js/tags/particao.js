import { hora_atual_segundos } from "../geradores/hora.js"
// import link from "../setup/index.js";
import salvar from "../olivia/salva.js"
import { RAIZ } from "../raiz.js";


export function index(suite, tipo) {

    switch (tipo) {
        case "locado":
            var valor = sessionStorage.getItem("valorInicialSuite")
            var dados = 'hora=' + hora_atual_segundos() + '&valor=' + '0' + '&suite=' + suite + '&tipo=' + tipo
            let cofre = 'suite=' + suite + '&valor=' + valor + '&tipo=' + tipo
            salvar(`http://${RAIZ}/suits/php/suites/prima/infom.php`, dados, false, "", false, "")
            //salvar(`http://${RAIZ}/suits/php/suites/informacoes.php`, dados, false, '', false, '')
            salvar(`http://${RAIZ}/suits/php/suites/prima/cofre.php`, cofre, false, "", false, "")
            sessionStorage.removeItem("valorInicialSuite")
            break;

        case "manutencao":
            //console.log('sdfd')
            var dados = 'hora=' + hora_atual_segundos() + '&valor=' + '0' + '&suite=' + suite + '&tipo=' + tipo
            //console.log(dados)
            salvar(`http://${RAIZ}/suits/php/suites/prima/infom.php`, dados, false, "", false, "")
            //salvar(`http://${RAIZ}/suits/php/suites/informacoes.php`, dados, false, '', false, '')
            break

        case "faxina":
            var dados = 'hora=' + hora_atual_segundos() + '&valor=' + '0' + '&suite=' + suite + '&tipo=' + tipo
            // var dados2 = 'hora=' + hora_atual_segundos() + '&valor=' + '0' + '&suite=' + suite + '&tipo=' + tipo
            salvar(`http://${RAIZ}/suits/php/suites/prima/infom.php`, dados, false, "", false, "")
            //salvar(`http://${RAIZ}/suits/php/suites/informacoes.php`, dados, false, '', false, '')
            //envia_informacoes(datahora, "", suite, tipo)
            break

        default:
            break;
    }
}


// function envia_informacoes(hora, valor, suite, tipo) {
//     $("#FormMain").html(
//         `<input type="text" name="cliente" id="cliente" value="0">` +
//         `<input type="text" name="hora" id="hora" value="${hora}">` +
//         `<input type="text" name="valor" id="valor" value="${valor}">` +
//         `<input type="text" name="suite" id="suite" value="${suite}">` +
//         `<input type="text" name="tipo" id="tipo" value="${tipo}">` +
//         `<button type="button" id="buton">A</button>`
//     )
//     setTimeout(() => {
//         let dadosPhp = $("#FormMain").serialize()
//         $.ajax({
//             type: 'POST',
//             dataType: 'json',
//             url: "http://localhost/Suites/php/suites/informacoes.php",
//             async: true,
//             data: dadosPhp
//         });
//         $("#FormMain").html("")
//     }, 2000);
// }

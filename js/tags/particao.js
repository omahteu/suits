import { hora_atual_segundos } from "../geradores/hora.js"
import salvar from "../olivia/salva.js"
import { RAIZ } from "../raiz.js";


export function index(suite, tipo) {

    switch (tipo) {
        case "locado":
            var valor = sessionStorage.getItem("valorInicialSuite")
            var dados = 'hora=' + hora_atual_segundos() + '&valor=' + valor + '&suite=' + suite + '&tipo=' + tipo
            let cofre = 'suite=' + suite + '&valor=' + valor + '&tipo=' + tipo
            salvar(`http://${RAIZ}/suits/php/suites/prima/infom.php`, dados, false, "", false, "")
            salvar(`http://${RAIZ}/suits/php/suites/prima/cofre.php`, cofre, false, "", false, "")
            sessionStorage.removeItem("valorInicialSuite")
            break;

        case "manutencao":
            var dados = 'hora=' + hora_atual_segundos() + '&valor=' + '0' + '&suite=' + suite + '&tipo=' + tipo
            salvar(`http://${RAIZ}/suits/php/suites/prima/infom.php`, dados, false, "", false, "")
            break

        case "faxina":
            var dados = 'hora=' + hora_atual_segundos() + '&valor=' + '0' + '&suite=' + suite + '&tipo=' + tipo
            salvar(`http://${RAIZ}/suits/php/suites/prima/infom.php`, dados, false, "", false, "")
            break

        case "revisao":
            var dados = 'hora=' + hora_atual_segundos() + '&valor=' + '0' + '&suite=' + suite + '&tipo=' + tipo
            salvar(`http://${RAIZ}/suits/php/suites/prima/infom.php`, dados, false, "", false, "")
            break

        default:
            break;
    }
}

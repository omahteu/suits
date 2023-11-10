import { data_atual } from "../../../geradores/data.js"
import { hora_atual_segundos } from "../../../geradores/hora.js"
import { RAIZ } from "../../../raiz.js"

export async function registra_troca(caixa, antigo, novo){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `http://${RAIZ}/suits/php/suites/troca.php`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

        }
    };
    var dados = "caixa=" + caixa + "&data=" + String(data_atual()) + "&hora=" + String(hora_atual_segundos()) + "&antigo=" + antigo + '&novo=' + novo;
    xhr.send(dados);
}

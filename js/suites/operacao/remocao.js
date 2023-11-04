import {data_atual} from "../../geradores/data.js"
import {hora_atual} from "../../geradores/hora.js"
import { RAIZ } from "../../raiz.js"

export default async function registraMotivoExclusao(operacao, motivo) {
    let usuario = localStorage.getItem("nome")
    let hoje = data_atual()
    let agora = hora_atual()
    var dados = 'usuario=' + usuario + '&data=' + hoje + '&hora=' + agora + '&operacao=' + operacao + '&motivo=' + motivo
    var xhr = new XMLHttpRequest();		
    xhr.open("POST", `http://${RAIZ}/suits/php/suites/remocao.php`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Motivo Salvo!')
        }
    };
    xhr.send(dados)
}

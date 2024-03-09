import { hora_atual_segundos } from "../../../geradores/hora.js";
import pernoite from "../../../tags/pernoite.js";
import make_url from "../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";

export default function ativar(index, valorpernoite) {
    const urlCofre = make_url("suites", "editarcofrep.php")
    const urlInfos = make_url("suites", "editarinfosq.php")
    const urlTasks = make_url("suites", "tarefas.php")

    const dataCofre = {antigo: index, novo: valorpernoite}
    const dataInfos = {suite: index, tipo: 'pernoite'}
    const dataTasks = {suite: index, modo: "p", tipo: "per", horario: hora_atual_segundos()}

    fazerRequisicaoAjax(urlCofre, "POST", dataCofre, function(response){console.log(response)}, function(){})
    fazerRequisicaoAjax(urlInfos, "POST", dataInfos, function(response){console.log(response)}, function(){})
    fazerRequisicaoAjax(urlTasks, "POST", dataTasks, function(response){console.log(response)}, function(){})
}

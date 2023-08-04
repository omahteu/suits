import link from "../../../setup/index.js"
import { data_atual } from "../../../geradores/data.js"
import { hora_atual } from "../../../geradores/hora.js"

export default function encerrando_faxina(suite, usuario, tempo) {
    let fm = document.forms[3]
    $(fm).html(
        `
            <select id="selecionar_camareira">
                <option value="" hidden>Camareiras</option>
            </select>
            <input type="button" id="acoes1" class="btn btn-warning inferior" value="Selecionar">
        `
    )
    $.get(link[3], e => {
        e.forEach(i => {
            $("#selecionar_camareira").append(`<option>${i.nome}</option>`)
        });
    })
    setTimeout(() => {
        var dados = {caixa: usuario, data: data_atual(), hora: hora_atual(), suite: suite, tempo: tempo, camareira: ""}
        localStorage.setItem("faxina", JSON.stringify(dados))
    }, 100)
}

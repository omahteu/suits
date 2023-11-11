import { data_atual } from "../../../geradores/data.js"
import { hora_atual } from "../../../geradores/hora.js"
import { RAIZ } from "../../../raiz.js"


export default async function encerrandoLimpeza(suite, usuario, tempo) {
    if (confirm(`Encerrar limpeza da Suíte ${suite}?`) == true) {
        let fm = document.forms[2]
        $(fm).html(
            `
                <select id="selecionar_camareira">
                    <option value="" hidden>Camareiras</option>
                </select>
                <input type="button" id="acoes1" class="btn btn-warning inferior" value="OK">
            `
        )
        $("#acoes1").css({
            "margin-top": "-10px"
        })
        const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/camareiras.php`)
        const rs = await rq.json()
        if (rs["status"]) {
            rs["dados"].forEach(i => {
                $("#selecionar_camareira").append(`<option>${i.nome}</option>`)
            });
        }
        setTimeout(() => {
            var dados = {caixa: usuario, data: data_atual(), hora: hora_atual(), suite: suite, tempo: tempo, camareira: ""}
            localStorage.setItem("limpeza", JSON.stringify(dados))
        }, 100)
    }
}

import { hora_atual_segundos } from "../geradores/hora.js"
import link from "../setup/index.js";
import salvar from "../olivia/salva.js"


export function index(suite, tipo) {

    switch (tipo) {
        case "locado":
            var datahora = hora_atual_segundos()
            var valor = sessionStorage.getItem("valorInicialSuite")
            var dados = {datahora: datahora, valor: valor, suite: suite, tipo: tipo}
            let cofre = {suite: suite, valor: valor, tipo: tipo}
            salvar(link[11], dados, false, "", false, "")
            envia_informacoes(datahora, valor, suite, tipo)
            salvar(link[36], cofre, false, "", false, "")
            sessionStorage.removeItem("valorInicialSuite")
            break;
        
        case "manutencao":
            let hora = hora_atual_segundos()
            var dados = {datahora: hora, valor: "", suite: suite, tipo: tipo}
            salvar(link[11], dados, false, "", false, "")
            envia_informacoes(datahora, "", suite, tipo)
            break

        case "faxina":
            let horaF = hora_atual_segundos()
            var dados = {datahora: horaF, valor: "", suite: suite, tipo: tipo}
            salvar(link[11], dados, false, "", false, "")
            envia_informacoes(datahora, "", suite, tipo)
            break

        default:
            break;
    }
}


function envia_informacoes(hora, valor, suite, tipo) {
    $("#FormMain").html(
        `<input type="text" name="cliente" id="cliente" value="0">` +
        `<input type="text" name="hora" id="hora" value="${hora}">` +
        `<input type="text" name="valor" id="valor" value="${valor}">` +
        `<input type="text" name="suite" id="suite" value="${suite}">` +
        `<input type="text" name="tipo" id="tipo" value="${tipo}">` +
        `<button type="button" id="buton">A</button>`
    )
    setTimeout(() => {
        let dadosPhp = $("#FormMain").serialize()
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: "http://localhost/Suites/php/suites/informacoes.php",
            async: true,
            data: dadosPhp
        });
        $("#FormMain").html("")
    }, 2000);
}

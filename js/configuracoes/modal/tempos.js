import { inicioMenu } from "../../setup/menu.js"

$(document).on("click", "#scet", function () {

    // Abertura do Modal
    inicioMenu("modau-menu")

    // Configuração do Formulário Modal
    let fm = document.forms[5]
    fm.id = "modal_tempos"
    fm.action = "../php/configuracoes/tempos.php"


    $(`#${fm.id}`).html(
        `
            <select name="tip_tempo" id="tip_tempo">
                <option hidden>Tempos</option>
                <option value="trocaTempo">Troca de Quarto</option>
                <option value="desistenciaTempo">Desistência</option>
                <option value="limpezaTempo">Limpeza</option>
                <option value="faxinaTempo">Faxina</option>
                <option value="manutencaoTempo">Manutenção</option>
            </select>
            <input type="number" min="1" max="60" name="novo_tempo" id="novo_tempo" placeholder="Novo Tempo" required>
            <button type="submit" class="btn btn-success">Atualizar</button>
        `
    )
})

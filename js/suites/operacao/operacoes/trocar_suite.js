import Suitesdisponiveis from "../../../relatorios/quartosDisponiveis.js"

export default function modalTrocandoSuite() {
    let fm = document.forms[2]
    $(fm).html(
        `
            <input type="text" id="quarto_antigo" value="" disabled>
            <select id="quartos_disponiveis">
              <option hidden>Suítes Disponíveis</option>
            </select>
            <button type="button" class="btn btn-warning" id="substituir">Substituir</button>
        `
    )
    setTimeout(() => {
        var antigo = $("#quarto_painel").text()
        $("#quarto_antigo").val(antigo)
    }, 100)
    setTimeout(() => { Suitesdisponiveis() }, 200);
}

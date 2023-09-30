import { inicioMenu } from "../../setup/menu.js"
import receber from "../../quartos/auxiliares/funcao4.js"

$(document).on('click', '#context', function () {
    let contexto = $(this)[0].offsetParent
    let contexto_num = $(contexto)[0].children[0].children[1]
    let num = $(contexto_num).text()
    let book = receber("offs")
    let filtro = book.filter(t => t.suite == num)
    let taf = receber("tarefas")

    inicioMenu("modau-menu")
    let fm = document.forms[3]

    if (filtro.length == 0) {
        $(fm).html(
            `
                <button type="button" class="btn manutencao">Manutenção</button>
                <button type="button" class="btn locado">Locação</button>
                <button type="button" class="btn faxina">Faxina</button>
                <button type="button" class="btn revisao">Revisão</button>
            `
        )
    } else {
        switch (filtro[0].tipo) {
            case "locado":
                let iss = taf.filter(o => o.suite == num)
                if (iss[0].modo == "a"){
                    $(fm).html(
                        `
                            <input type="button" id="acoes1" class="btn btn-warning inferior" value="Encerrar">
                            <input type="button" id="acoes2" class="btn btn-warning inferior" value="Trocar Suíte">
                        `
                    )
                } else {
                    $(fm).html(
                        `
                            <input type="button" id="acoes1" class="btn btn-warning inferior" value="Encerrar">
                        `
                    )
                }
                break;

            case "faxina":
                $(fm).html(
                    `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" value="Encerrar Faxina">
                    `
                )
                break

            case "manutencao":
                let man = taf.filter(l => l.suite == num)
                if (man[0].modo == "l") {
                    $(fm).html(
                        `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" name="" data-toggle="" value="Disponibilizar Quarto">
                        <input type="button" id="acoes2" class="btn btn-warning inferior" name="" data-toggle="" value="Iniciar Faxina">
                        <input type="button" id="acoes3" class="btn btn-warning inferior" name="" data-toggle="" value="Ligar Luz">
                        `
                    )
                } else {
                    $(fm).html(
                        `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" name="" data-toggle="" value="Disponibilizar Quarto">
                        <input type="button" id="acoes2" class="btn btn-warning inferior" name="" data-toggle="" value="Iniciar Faxina">
                        `
                    )
                }
                break;

            case "pernoite":
                $(fm).html(
                    `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" value="Encerrar">
                    `
                )
                break

            case "aguardando":
                //console.log(filtro)
                //if (filtro[0].tipo == "aguardando")
                $(fm).html(
                    `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" value="Iniciar Limpeza">
                    `
                )
                break

            case "limpeza":
                $(fm).html(
                    `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" value="Encerrar Limpeza">
                    `
                )
                break

            case "revisao":
                let mans = taf.filter(l => l.suite == num)
                if (mans[0].modo == "l") {
                    $(fm).html(
                        `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" name="" data-toggle="" value="Disponibilizar Quarto">
                        `
                    )
                } else {
                    $(fm).html(
                        `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" name="" data-toggle="" value="Disponibilizar Quarto">
                        `
                    )
                }
                break

            case "apagamento":
                $(fm).html(
                    `
                        <input type="button" id="acoes2" class="btn btn-warning inferior" value="Finalizar">
                    `
                )
                break

            default:
                break;
        }
    }
})

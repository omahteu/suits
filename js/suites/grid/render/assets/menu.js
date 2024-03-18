import receber from "../../../../quartos/auxiliares/funcao4.js"
import { inicioMenu } from "../../../../setup/menu.js"
import make_url from "../../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../../tools/ajax.js"

export default function menu(core) {

    let suite = $($(core)[0].offsetParent.children[0].children[1]).text();
    console.log(`suite ${suite}`)
    let book = receber("offs")
    let filtro = book.filter(t => t.suite == suite)
    var taf = receber("tarefas")

    inicioMenu("modau-menu")
    let fm = document.forms[2]

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

        var minhaManutencao = localStorage.getItem(`manu${suite}`)

        if (minhaManutencao) {
            menuManutencao(suite)
        }

        switch (filtro[0].tipo) {

            case "locado":
                let iss = taf.filter(o => o.suite == suite)
                if (iss[0].modo == "t") {
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

            case "pernoite":
                $(fm).html(
                    `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" value="Encerrar">
                    `
                )
                break

            case "aguardando":
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
                let mans = taf.filter(l => l.suite == suite)
                if (mans[0].modo == "r") {
                    $(fm).html(
                        `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" name="" data-toggle="" value="Encerrar revisão">
                        `
                    )
                } else {
                    $(fm).html(
                        `
                        <input type="button" id="acoes1" class="btn btn-warning inferior" name="" data-toggle="" value="Encerrar revisão">
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
}

function menuManutencao(suite) {
    const url = make_url("somelier", "main.php")
    fazerRequisicaoAjax(url, "POST", {tabela: "acoes"}, function(response) {
        const data = JSON.parse(response)
        if (data.status) {
            inicioMenu("modau-menu")
            let fm = document.forms[2]
            let minhaSituacao = data.dados.filter(i => i.suite = suite)
            if (minhaSituacao[0].situacao == "off") {
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
                    <input type="button" id="acoes3" class="btn btn-warning inferior" name="" data-toggle="" value="Apagar Luz">
                    `
                )
            }
        }
    }, function(error) {
        console.log(error)
    })
}

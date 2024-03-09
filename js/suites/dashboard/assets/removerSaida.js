import registraMotivoExclusao from "../../operacao/remocao.js";
import comandaSuite from "./comanda.js";
import makeUrl from "../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";
import calculo from "./comandaSoma.js";

function promptForExclusionReason() {
    const motivo = prompt('Motivo da retirada do produto:');
    
    if (motivo === null || motivo.trim().length === 0) {
        alert('Produto não excluído!\nÉ necessário o motivo da exclusão do produto!');
        return null;
    }

    return motivo;
}

export default function removeProduto(id) {
    const url = makeUrl("suites", "excluir.php");
    const urlComanda = makeUrl("assets", "comanda.php")
    const suite = $("#quarto_painel").text();
    
    const motivo = promptForExclusionReason();

    if (motivo === null) {
        return;
    }

    registraMotivoExclusao("Remoção de Produto", motivo);

    const dados = `tabela=comanda&coluna=id&valor=${id}`;
    
    fazerRequisicaoAjax(url, "POST", dados, function() {

        fazerRequisicaoAjax(urlComanda, "GET", null, function(response) {
            const data = JSON.parse(response)
            if (!data.status) {
                calculo(suite);
            }
        }, function(error) {
            console.log(error)
        })
        comandaSuite(suite);
        calculo(suite);
    }, function(error) {
        console.log(error);
    });
}

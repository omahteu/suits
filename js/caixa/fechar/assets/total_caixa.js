import fazerRequisicaoAjax from "../../../tools/ajax.js";
import make_url from "../../../tools/urls.js";

const url = make_url("caixa/show", "pagamentos.php");

export default function obterTotais() {
    fazerRequisicaoAjax(url, "GET", null, handleSuccess, handleFailure);
}

function handleSuccess(response) {
    try {
        const responseJSON = JSON.parse(response);

        if (responseJSON.status) {
            sessionStorage.setItem("total_caixa", JSON.stringify(responseJSON.dados));
        }
    } catch (error) {
        console.error("Erro ao processar resposta JSON:", error);
    }
}

function handleFailure(error) {
    console.error("Erro na requisição Ajax:", error);
}

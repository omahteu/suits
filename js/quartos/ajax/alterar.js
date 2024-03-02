import make_url from "../../tools/urls.js";
import fazerRequisicaoAjax from "../../tools/ajax.js";

// Checar se passa como um objeto ou se precisa ser string

export default function alterarValor(suite, valor) {
    const urlGet = make_url("suites/show", "cofre.php");
    const urlPost = make_url("suites", "editarcofrep.php");

    fazerRequisicaoAjax(urlGet, "GET", null, function (response) {
        try {
            const data = JSON.parse(response);

            if (data.status) {
                const filteredSuite = data.dados.find((item) => item.suite === suite);

                if (filteredSuite && filteredSuite.tipo === "locado") {
                    const postData = {
                        antigo: suite,
                        novo: valor
                    };

                    fazerRequisicaoAjax(urlPost, "POST", postData, function (postResponse) {
                        console.log(postResponse);
                        // ENCONTRAR UMA REFORMA DE FAZER A REQUISIÇÃO APENAS UMA VEZ AO ATUALIZAR O VALOR
                    }, function (postError) {
                        console.log(postError);
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, function (getError) {
        console.log(getError);
    });
}

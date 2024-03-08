import make_url from "../../tools/urls.js";
import fazerRequisicaoAjax from "../../tools/ajax.js";

function checaSeRequisicaoJaFoiFeita(valorDoCofre, valorASerAdicionado) {
    return valorDoCofre !== valorASerAdicionado;
}

export default function alterarValor(suite, valor) {
    const urlGet = make_url("suites/show", "cofre.php");
    const urlPost = make_url("suites", "editarcofrep.php");

    fazerRequisicaoAjax(urlGet, "GET", null, function (response) {
        try {
            const data = JSON.parse(response);

            if (data.status) {
                const filteredSuite = data.dados.find((item) => item.suite === suite);

                if (filteredSuite && filteredSuite.tipo === "locado" && checaSeRequisicaoJaFoiFeita(filteredSuite.valor, valor)) {
                    const postData = {
                        antigo: suite,
                        novo: valor
                    };

                    fazerRequisicaoAjax(urlPost, "POST", postData, function (postResponse) {
                        console.log(postResponse);
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

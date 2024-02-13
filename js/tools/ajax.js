export default function fazerRequisicaoAjax(site, metodo, dados, sucessoCallback, erroCallback) {

    var configuracao = {
        url: site,
        type: metodo,
        success: sucessoCallback,
        error: erroCallback
    };

    if (dados) {
        configuracao.data = dados;
    }

    $.ajax(configuracao);
}

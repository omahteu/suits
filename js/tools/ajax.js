export default function fazerRequisicaoAjax(site, metodo, dados, sucessoCallback, erroCallback) {
    // Configuração padrão para a requisição AJAX
    var configuracao = {
        url: site,
        type: metodo,
        success: sucessoCallback,
        error: erroCallback
    };

    // Adiciona dados ao corpo da requisição, se houver
    if (dados) {
        configuracao.data = dados;
    }

    // Faz a requisição AJAX
    $.ajax(configuracao);
}

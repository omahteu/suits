import { hora_atual_segundos } from "../../../geradores/hora.js";
import fundo_de_caixa from "../assets/fundo_caixa.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";
import make_url from "../../../tools/urls.js";
import obterTotais from "../assets/total_caixa.js";
import limparLocalStorage from "../assets/limpar_ls.js";
import limparSessionStorage from "../assets/limpar_ss.js";

const commands = {
    fecharCaixa: "#fecharCaixa"
};

const calcularTotal = () => {
    const allTotais = obterTotais()
    if (allTotais != undefined) {
        return allTotais.reduce((soma, elemento) => soma + elemento.total, 0)
    } else {
        return 0
    }
}

const fundoCaixa = fundo_de_caixa();
const url = make_url("caixa/fechar", "main.php");
const soma = calcularTotal();

const fecharCaixaHandler = () => {
    const dados = {
        saida: hora_atual_segundos(),
        fundo: fundoCaixa,
        total: soma
    };

    const onSuccess = (response) => {
        limparLocalStorage();
        limparSessionStorage();
    
        setTimeout(() => {
            document.location.reload(true);
        }, 4000);
    };

    const onError = (erro) => {
        console.log(erro);
    };

    fazerRequisicaoAjax(url, "POST", dados, onSuccess, onError);
};

$(document).on("click", commands.fecharCaixa, fecharCaixaHandler);

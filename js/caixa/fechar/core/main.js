import { hora_atual_segundos } from "../../../geradores/hora.js";
import fundoDeCaixa from "../assets/fundo_caixa.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";
import makeUrl from "../../../tools/urls.js";
import obterTotais from "../assets/total_caixa.js";
import limparLocalStorage from "../assets/limpar_ls.js";
import limparSessionStorage from "../assets/limpar_ss.js";
import usuario from "../assets/usuario.js";
import processarDadosDinheiro from "../assets/pagamentos/dinheiro.js";
import processarDadosPix from "../assets/pagamentos/pix.js";
import processarDadosDebito from "../assets/pagamentos/debito.js";
import processarDadosCredito from "../assets/pagamentos/credito.js";

const identificadores = {
    fecharCaixa: "#fecharCaixa",
    usuario: "#usuario",
    fundoCaixa: "#fundoCaixa",
    abaSaldo: "#aba_saldo",
    tabSaldo: "#tab_saldo"
};

const calcularTotal = () => {
    const allTotais = obterTotais() || [];
    return allTotais.reduce((soma, elemento) => soma + elemento.total, 0).toString();
};

const fundoCaixaHandler = () => {
    $(identificadores.fundoCaixa).html(`<tr><td>${fundoDeCaixa()}</td></tr>`);
};

const fecharCaixaHandler = () => {
    const dados = {
        saida: hora_atual_segundos(),
        fundo: fundoDeCaixa,
        total: calcularTotal()
    };

    const onSuccess = (response) => {
        limparLocalStorage();
        limparSessionStorage();

        setTimeout(() => {
            window.location.href = `${location.origin}/suits/`;
        }, 1000);
    };

    const onError = (erro) => {
        console.log(erro);
    };

    fazerRequisicaoAjax(makeUrl("caixa/fechar", "main.php"), "POST", dados, onSuccess, onError);
};

const relatorioValoresHandler = () => {
    const onSuccess = (response) => {
        processarDadosDinheiro(response);
        processarDadosPix(response);
        processarDadosDebito(response);
        processarDadosCredito(response);
    };

    const onError = (erro) => {
        console.log(erro);
    };

    fazerRequisicaoAjax(makeUrl("caixa/show", "pagamentos.php"), "GET", null, onSuccess, onError);
};

const obterValorLocalStorage = (chave) => localStorage.getItem(chave) || "0";

const calcularSaldo = () => {
    const dinheiroValue = parseFloat(obterValorLocalStorage("dinheiro"));
    const pixValue = parseFloat(obterValorLocalStorage("pix"));
    const debitoValue = parseFloat(obterValorLocalStorage("debito"));
    const creditoValue = parseFloat(obterValorLocalStorage("credito"));
    const fundoValue = parseFloat(obterValorLocalStorage("fundo")) || 0;

    const saldoComFundoCaixa = dinheiroValue + pixValue + debitoValue + creditoValue + fundoValue;
    const saldoSemFundoCaixa = dinheiroValue + pixValue + debitoValue + creditoValue;

    return {
        saldoComFundoCaixa,
        saldoSemFundoCaixa,
        dinheiroValue,
        pixValue,
        creditoValue,
        debitoValue,
    };
};

const atualizarTabelaSaldo = () => {
    const {
        saldoComFundoCaixa,
        saldoSemFundoCaixa,
        dinheiroValue,
        pixValue,
        creditoValue,
        debitoValue,
    } = calcularSaldo();

    const tabela = document.getElementById("tab_saldo");
    tabela.innerHTML = `
        <tr>
            <td>${saldoComFundoCaixa}</td>
            <td>${saldoSemFundoCaixa}</td>
            <td>${dinheiroValue}</td>
            <td>${pixValue}</td>
            <td>${creditoValue}</td>
            <td>${debitoValue}</td>
        </tr>
    `;
};

$(document).on("click", identificadores.fecharCaixa, fecharCaixaHandler);
$(identificadores.usuario).val(usuario());
$(window).on("load", relatorioValoresHandler);
$(window).on("load", fundoCaixaHandler);
$(document).on("click", identificadores.abaSaldo, atualizarTabelaSaldo);

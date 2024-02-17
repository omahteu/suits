import { hora_atual_segundos } from "../../../geradores/hora.js";
import fundoDeCaixa from "../assets/fundo_caixa.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";
import makeUrl from "../../../tools/urls.js";
import obterTotais from "../assets/total_caixa.js";
import limparLocalStorage from "../assets/limpar_ls.js";
import limparSessionStorage from "../assets/limpar_ss.js";
import usuario from "../assets/usuario.js";
import processarDadosDinheiro from "../assets/pagamentos/dinheiro.js";
import pix from "../assets/pagamentos/pix.js";
import debito from "../assets/pagamentos/debito.js";
import credito from "../assets/pagamentos/credito.js";

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
    $(identificadores.fundoCaixa).html(`<tr><td>${fundoDeCaixa}</td></tr>`);
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
        pix(response);
        debito(response);
        credito(response);
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

// const atualizarTabelaSaldo = () => {
//     const dinheiroValue = localStorage.getItem("dinheiro") || "0";
//     const pixValue = localStorage.getItem("pix") || "0";
//     const debitoValue = localStorage.getItem("debito") || "0";
//     const creditoValue = localStorage.getItem("credito") || "0";
//     const fundoValue = localStorage.getItem("fundo") || "0";

//     const saldoComFundoCaixa = parseFloat(dinheiroValue) + parseFloat(pixValue) + parseFloat(debitoValue) + parseFloat(creditoValue) + parseFloat(fundoValue);
//     const saldoSemFundoCaixa = parseFloat(dinheiroValue) + parseFloat(pixValue) + parseFloat(debitoValue) + parseFloat(creditoValue);

//     const tabela = document.getElementById("tab_saldo");
//     tabela.innerHTML = `
//         <tr>
//             <td>${saldoComFundoCaixa}</td>
//             <td>${saldoSemFundoCaixa}</td>
//             <td>${dinheiroValue}</td>
//             <td>${pixValue}</td>
//             <td>${creditoValue}</td>
//             <td>${debitoValue}</td>
//         </tr>
//     `;
// };

$(document).on("click", identificadores.fecharCaixa, fecharCaixaHandler);
$(identificadores.usuario).val(usuario());
$(window).on("load", relatorioValoresHandler);
$(window).on("load", fundoCaixaHandler);
// $(document).on("click", identificadores.abaSaldo, atualizarTabelaSaldo);
// Uso
$(document).on("click", identificadores.abaSaldo, atualizarTabelaSaldo);

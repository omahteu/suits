import makeUrl from "../../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../../tools/ajax.js";

function calculateTotalValue(data, suite) {
    const filtroComanda = data.dados.filter(i => i.suite == suite);
    const sum = filtroComanda.reduce((acc, el) => acc + parseFloat(el.valor_total.replace(/[^\d.-]/g, '')), 0);
    return sum.toFixed(2);
}

export default function calculo(suite) {
    const url = makeUrl("assets", "comanda.php");

    fazerRequisicaoAjax(url, "GET", null, function(response) {
        try {
            const data = JSON.parse(response);

            if (data.status) {
                const totalConsumption = calculateTotalValue(data, suite);
                $("#consumo_painel").text(totalConsumption);
                localStorage.setItem("consumo", totalConsumption)
            } else {
                localStorage.setItem("consumo", "0.00")
                // console.log("ERRO | Linha 13 | comandaSoma.js | Contate o Administrador |");
            }
        } catch (error) {
            console.log("produtos.js", `[LOGS] | ${error}`);
        }
    }, function(error) {
        console.log(error);
    });
}

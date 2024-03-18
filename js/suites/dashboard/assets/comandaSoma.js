import makeUrl from "../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";

function calculateTotalValue(data, suite) {
    const filtroComanda = data.dados.filter(i => i.suite == suite);
    const sum = filtroComanda.reduce((acc, el) => acc + parseFloat(el.valor_total.replace(/[^\d.-]/g, '')), 0);
    return sum.toFixed(2);
}

export default function calculo(suite) {
    const url = makeUrl("somelier", "main.php");

    fazerRequisicaoAjax(url, "POST", {tabela: "comanda"}, function(response) {
        try {
            const data = JSON.parse(response);

            if (data.status) {
                const totalConsumption = calculateTotalValue(data, suite);
                localStorage.setItem("consumo", totalConsumption)
            } else {
                localStorage.setItem("consumo", "0.00")
            }
        } catch (error) {
            console.log("produtos.js", `[LOGS] | ${error}`);
        }
    }, function(error) {
        console.log(error);
    });
}

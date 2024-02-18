import makeUrl from "../../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../../tools/ajax.js";

function formatCurrency(value) {
    const formattedValue = parseFloat(value).toFixed(2);
    return `R$${formattedValue}`;
}

function createProductRow(product) {
    const vt = String(product.valor_total);
    const vt2 = vt.match(/\D+|\d+/g);

    return `
        <tr>
            <td>${product.descricao}</td>
            <td>${product.quantidade}</td>
            <td>${product.valor_unitario}</td>
            <td>${formatCurrency(vt2[1])}</td>
            <td><button type="button" class="btn btn-danger" data-product-id="${product.id}">Remover</button></td>
        </tr>
    `;
}

export default function comandaSuite(suite = "0") {
    const url = makeUrl("assets", "comanda.php");
    const comanda = document.getElementById('listaProdutosComprados');

    fazerRequisicaoAjax(url, "GET", null, function(response) {
        try {
            const data = JSON.parse(response);

            if (data.status) {
                const filteredData = data.dados.filter(l => l.suite == suite);

                comanda.innerHTML = filteredData.map(createProductRow).join('');
            } else {
                comanda.innerHTML = '';
            }
        } catch (error) {
            console.log("produtos.js", `[LOGS] | ${error}`);
        }
    }, function(error) {
        console.log(error);
    });
}

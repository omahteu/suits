export default function credito(responseData) {
    const data = JSON.parse(responseData);
    let totalAmount = 0;

    if (data.status) {
        const dinheiroData = data.dados.filter(entry => entry.forma.slice(0, 7) === "Crédito");
        const dinheiroTable = document.getElementById("tab_credito");
        dinheiroTable.innerHTML = "";

        dinheiroData.forEach(entry => {
            dinheiroTable.innerHTML += `
                <tr>
                    <td>${entry.suite}</td>
                    <td>${entry.data}</td>
                    <td>${entry.entrada}</td>
                    <td>${entry.saida}</td>
                    <td>${entry.total}</td>
                    <td>${entry.usuario}</td>
                </tr>
            `;

            const entryTotal = parseFloat(entry.total);
            totalAmount += isNaN(entryTotal) ? 0 : entryTotal;
        });

        localStorage.setItem("credito", totalAmount.toFixed(2));
    } else {
        console.error("Erro na solicitação. Contate o Administrador");
    }
}

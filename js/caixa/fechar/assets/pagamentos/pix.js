export default function pix(responseData) {
    const data = JSON.parse(responseData);
    let totalAmount = 0;

    if (data.status) {
        const dinheiroData = data.dados.filter(entry => entry.forma === "PIX");
        const dinheiroTable = document.getElementById("lista_pix");
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

        localStorage.setItem("pix", totalAmount.toFixed(2));
    } else {
        console.error("Erro na solicitação. Contate o Administrador");
    }
}

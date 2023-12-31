

function formatarMoeda(e) {
    var v = e.target.value.replace(/\D/g, "");
    v = (v / 100).toFixed(2) + "";
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    e.target.value = v;
}


$(document).on("click", "#BuscaInfoProduto", function() {
    setTimeout(() => {
        const input = document.getElementById("valorUnitarioProduto");

        input.addEventListener("keyup", formatarMoeda);
    }, 1000);
})
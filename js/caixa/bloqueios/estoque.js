export default function _estoque() {
    var status = localStorage.getItem("caixa")
    if (status === "aberto") {
        $("#usarProdutosSemCaixa").css("display", "none")
    }
}

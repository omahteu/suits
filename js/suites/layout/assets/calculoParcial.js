export default function calculoParcial() {

    var adicional = parseFloat(localStorage.getItem("adicional"))

    var suite = parseFloat(localStorage.getItem("suitx"))

    var consumo = parseFloat(localStorage.getItem("consumo"))

    let produto = adicional + suite + consumo

    setTimeout(() => {
        $("#vh_painel").text(adicional)
        $("#vq_painel").text(suite)
        $("#consumo_painel").text(consumo)
        $("#parcial_painel").text(produto)
    }, 1000);
}

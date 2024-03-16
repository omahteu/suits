export default function calculoParcial() {
    setTimeout(() => {

        var adicional = parseFloat(localStorage.getItem("adicional"))

        var suite = parseFloat(localStorage.getItem("suitx"))
    
        var consumo = parseFloat(localStorage.getItem("consumo"))
    
        let produto = adicional + suite + consumo
        console.log(produto)

        $("#vh_painel").text(adicional)
        $("#vq_painel").text(suite)
        $("#consumo_painel").text(parseFloat(consumo).toFixed(2))
        $("#parcial_painel").text(produto)
    }, 1000);
}

export default function _home() {
    var status = localStorage.getItem("caixa")
    if (status === "fechado") {
        $("#home").css("display", "none")
    }
}

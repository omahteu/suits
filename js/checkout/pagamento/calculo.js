$(document).on("click", "#calcular", function () {
    var recebido = parseFloat($("#recebido").val()).toFixed(2);
    var total = $("#totalGeral").text();
    let troco = recebido - parseFloat(total)
    $("#recebido").val(`TROCO DE R$ ${parseFloat(troco).toFixed(2)}`);
    $("#recebido").attr("readonly", true);
    $(this).attr("disabled", true);
    localStorage.setItem('troco', parseFloat(troco).toFixed(2))
});

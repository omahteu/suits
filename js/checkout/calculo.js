$(document).on("click", "#calcular", function () {
    var recebido = parseFloat($("#recebido").val()).toFixed(2);
    var total = $("#totalGeral").text();
    $("#recebido").val(`TROCO DE R$ ${recebido - parseFloat(total)}`);
    $("#recebido").attr("readonly", true);
    $(this).attr("disabled", true);
    console.log(recebido, total);
});

export function total() {
  $(document).on("change", "#modo_pagamento", function () {
    let forma = $("#modo_pagamento :selected").text();
    if (forma == "Dinheiro") {
      let desconto = $("#valorDesconto").text();
      let sub = parseFloat($("#valor_subtotal").text());
      if (desconto.charAt(0) == "R") {
        let total = sub - parseFloat(desconto.slice(3));
        $("#totalGeral").text(total.toFixed(2));
        $("#confirma_parcelas").attr("disabled", "true");
        $("#confirma_parcelas").css("background", "black");
      } else if (desconto.charAt(0) == "0") {
        $("#totalGeral").text(sub.toFixed(2));
        $("#confirma_parcelas").attr("disabled", "true");
        $("#confirma_parcelas").css("background", "black");
      } else {
        let decimal = parseFloat(desconto.slice(0, -1)) / 100;
        let descontando = sub * decimal;
        let valor = sub - descontando;
        $("#totalGeral").text(valor.toFixed(2));
        $("#confirma_parcelas").attr("disabled", "true");
        $("#confirma_parcelas").css("background", "black");
      }
    }
  });
}

import fazerRequisicaoAjax from "../../../tools/ajax.js";
import make_url from "../../../tools/urls.js";

export default function calculoHoraAdicional(suite) {
  try {
    const offs = JSON.parse(sessionStorage.getItem('offs'));
    const url = make_url("suites/show", "cofre.php");

    fazerRequisicaoAjax(url, "GET", null, processarResposta, tratarErro);

    function processarResposta(response) {
      const data = JSON.parse(response);

      if (data.status) {
        calcularAdicional(data.dados);
      } else {
        console.log("Fazer ainda");
      }
    }

    function calcularAdicional(dados) {
      try {
        const ficha = dados.filter(i => i.suite === suite);
        const aberto = offs.find(z => z.suite === suite);

        const valorFicha = ficha.reduce((acc, el) => acc + parseFloat(el.valor), 0);
        const adicionado = parseFloat(valorFicha) - parseFloat(aberto.valor);

        // $("#vh_painel").text(adicionado.toFixed(2));
        localStorage.setItem("adicional", adicionado.toFixed(2));
      } catch (error) {
        console.log(error);
      }
    }

    function tratarErro(error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

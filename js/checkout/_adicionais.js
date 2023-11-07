import { RAIZ } from "../raiz.js";

export default async function adicionais(suite, id_quarto, id_permanencia) {
  setTimeout(() => {
    let quarto = $(`#${id_quarto}`).text();
    let valor = 0;
    add(suite, id_permanencia, quarto, valor);
  }, 1000);
}

async function add(suite, id_permanencia, quarto, valor) {
  const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`);
  const rs = await rq.json();
  if (rs["status"]) {
    let ficha = rs["dados"].filter((i) => i.suite == suite)
    if (ficha.length == 0) {
      $(`#${id_permanencia}`).text("0.00");
    } else {
      ficha.forEach((el) => {
        valor += parseFloat(el.valor);
      });
      let adicionado = parseFloat(valor) - parseFloat(quarto);
      $(`#${id_permanencia}`).text(parseFloat(adicionado).toFixed(2));
      localStorage.setItem(`va${suite}`, `${parseFloat(adicionado).toFixed(2)}`)
    }
  } else {
    $("#valor_addPermanencia").text('0.00');
    localStorage.setItem(`va${suite}`, '0')
  }
}

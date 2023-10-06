import { RAIZ } from "../raiz.js";

export async function somaComanda(suite) {
  let total = 0;
  const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/comanda.php`);
  const rs = await rq.json();
  if (rs["status"]) {
    let ficha = rs["dados"].filter((i) => i.suite == suite);
    ficha.forEach((el) => {
      const valores = el.valor_total;
      total += parseFloat(valores.slice(3));
    });
    $("#valorItens").text(parseFloat(total).toFixed(2));
    localStorage.setItem('vcomanda', parseFloat(total).toFixed(2))
  } else {
    $("#valorItens").text('0.00');
    localStorage.setItem('vcomanda', '0.00')
  }
}

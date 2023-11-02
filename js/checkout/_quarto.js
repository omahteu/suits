export default function vsuite() {
  let suite = localStorage.getItem("last");
  let dados = JSON.parse(sessionStorage.getItem("offs"));
  let filtr = dados.filter((x) => (x.suite = suite));
  $("#valorQuarto").text(filtr[0].valor);
  localStorage.setItem('vs', parseFloat(filtr[0].valor).toFixed(2))
}

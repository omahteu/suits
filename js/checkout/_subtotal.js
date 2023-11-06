export default function subtotal() {
  setTimeout(() => {
    let comanda = localStorage.getItem('vc') == null ? '0' : localStorage.getItem('vc')
    let suite = localStorage.getItem('vs') == null ? '0' : localStorage.getItem('vs')
    let desconto = localStorage.getItem('vd') == null ? '0' : localStorage.getItem('vd')
    let adicional = localStorage.getItem('va') == null ? '0' : localStorage.getItem('va')
    var subtotal = parseFloat(suite) + parseFloat(adicional) + parseFloat(comanda) - parseFloat(desconto)
    $("#valor_subtotal").text(subtotal.toFixed(2));
    localStorage.setItem('vst', subtotal.toFixed(2))
  }, 800);
}

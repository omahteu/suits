export default function recupera_permanencia(suite) {
  let permanencia = localStorage.getItem(`_${suite}`)
  let horaFormatada = moment(permanencia.replace(/,/g, ':'), 'HH:mm:ss').format('HH:mm:ss');
  $("#tempoPermanencia").text(horaFormatada);
  localStorage.setItem(`permanencia${suite}`, horaFormatada)
}

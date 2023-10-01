import { hora_atual_segundos } from "../../geradores/hora.js"
import { alterarValor } from "../../quartos/ajax/alterar.js"
import receber from "../../quartos/auxiliares/funcao4.js"

$(document).on('click', '[class="card"]', function () {
  var lv = $(this)
  var lv2 = $(lv[0].children[0])
  var lv3 = $(lv2[0].children[1])
  var lv4 = lv3.text()
  atualizaValores(lv4)
})

function atualizaValores(suite) {
  try {

    var alugados = receber("offs")
    var suites = receber("dados_suites")
    var precos = receber("tabela_precos")

    // var buscar_se_alugado = alugados.filter(e => e.suite == suite)
    var se_alugado_dados = suites.filter(e => e.numeroSuite == suite)

    var modo_cobranca = se_alugado_dados[0].cobrancaSuite
    
    if (modo_cobranca == "hora") {
      
      
      let funil = alugados.filter(x => x.suite == suite)
      let iniciado = funil[0].hora
      const horarioRegistrado = moment(iniciado, 'HH:mm:ss');

      let funil_suites = suites.filter(o => o.numeroSuite == funil[0].suite)
      let funil_precos = precos.filter(u => u.codigo == funil_suites[0].codigoSuite)


      function verificarHoraPassada() {
        const horaAtual = moment();
        const diferencaEmHoras = horaAtual.diff(horarioRegistrado, 'hours')

        if (diferencaEmHoras >= 0 && diferencaEmHoras < 1) {
          alterarValor(suite, funil_precos[0].vh1)
        } else if (diferencaEmHoras >= 1 && diferencaEmHoras < 2) {
          alterarValor(suite, funil_precos[0].vh2)
        } else if(diferencaEmHoras >= 2 && diferencaEmHoras < 3) {
          alterarValor(suite, funil_precos[0].vh3)
        } else if (diferencaEmHoras >= 3 && diferencaEmHoras < 4) {
          alterarValor(suite, funil_precos[0].vh4)
        } else if (diferencaEmHoras >= 4 && diferencaEmHoras < 5) {
          alterarValor(suite, funil_precos[0].vh5)
        } else if (diferencaEmHoras >= 5 && diferencaEmHoras < 6) {
          alterarValor(suite, funil_precos[0].vh6)
        } else if (diferencaEmHoras >= 6 && diferencaEmHoras < 7) {
          alterarValor(suite, parseFloat(parseInt(funil_precos[0].vh6) + 10).toFixed(2))
        } else if (diferencaEmHoras >= 8 && diferencaEmHoras < 9) {
          console.log('Já se passou 8 hora desde o horário registrado.');
        }
      }

      setTimeout(() => {
        verificarHoraPassada()
      }, 1000);

    } else if (modo_cobranca == "fixa") {

      let funil = alugados.filter(x => x.suite == suite)
      let iniciado = funil[0].hora
      let horarioDeEntrada = moment(iniciado, 'HH:mm:ss');

      let funil_suites = suites.filter(o => o.numeroSuite == funil[0].suite)
      let funil_precos = precos.filter(u => u.codigo == funil_suites[0].codigoSuite)

      let valorInicial = funil_precos[0].locacao
      //let limiteDeHoras = parseInt(funil_suites[0].horas_locacaoSuite)
      //let limiteDeHoras = localStorage.getItem('limite')
      var limiteDeHoras = parseInt(localStorage.getItem('limite')) || parseInt(funil_suites[0].horas_locacaoSuite);

      let limiteDeMinutos = funil_suites[0].toleranciaSuite
      
      const horaAtual = moment();
      const diferencaEmHoras = horaAtual.diff(horarioDeEntrada, 'hours');
      const diferencaEmMinutos = horaAtual.diff(horarioDeEntrada, 'minutes')

      console.log(diferencaEmHoras)
      console.log(diferencaEmMinutos)

      if (diferencaEmHoras > limiteDeHoras || (diferencaEmHoras === limiteDeHoras && diferencaEmMinutos >= limiteDeMinutos)) {
        const valorDuplicado = valorInicial * 2
        valorInicial = valorDuplicado;
        //console.log('Valor atualizado:', valorInicial.toFixed(2));
      }

      localStorage.setItem('limite', limiteDeHoras += limiteDeHoras)

      //console.log(limiteDeHoras)

    }

  } catch (error) {
    sessionStorage.setItem("porHora.js", `[LOGS] | ${error}`)
  }
}

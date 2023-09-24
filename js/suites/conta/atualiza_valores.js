import { hora_atual_segundos } from "../../geradores/hora.js"
import { alterarValor } from "../../quartos/ajax/alterar.js"
import receber from "../../quartos/auxiliares/funcao4.js"

$(window).on("load", function () {
  let base = receber("offs")
  base.forEach(e => {
    atualizaValores(e.suite)
  });
})

function atualizaValores(suite) {
  try {
    var alugados = receber("offs")
    var suites = receber("dados_suites")
    var precos = receber("tabela_precos")

    var buscar_se_alugado = alugados.filter(e => e.suite == suite)
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



        if (diferencaEmHoras >= 0 && diferencaEmHoras < 2) {
          alterarValor(suite, funil_precos[0].vh1)
        } else if (diferencaEmHoras >= 2 && diferencaEmHoras < 3) {
          alterarValor(suite, funil_precos[0].vh2)
        } else if(diferencaEmHoras >= 3 && diferencaEmHoras < 4) {
          alterarValor(suite, funil_precos[0].vh3)
        } else if (diferencaEmHoras >= 4 && diferencaEmHoras < 5) {
          alterarValor(suite, funil_precos[0].vh4)
        } else if (diferencaEmHoras >= 5 && diferencaEmHoras < 6) {
          alterarValor(suite, funil_precos[0].vh5)
        } else if (diferencaEmHoras >= 6 && diferencaEmHoras < 7) {
          alterarValor(suite, funil_precos[0].vh6)
        } else if (diferencaEmHoras >= 7 && diferencaEmHoras < 8) {
          alterarValor(suite, parseFloat(parseInt(funil_precos[0].vh6) + 10).toFixed(2))
        } else if (diferencaEmHoras >= 8 && diferencaEmHoras < 9) {
          console.log('Já se passou 8 hora desde o horário registrado.');
        }
      }

      const intervaloDeVerificacao = 1000
      setInterval(verificarHoraPassada, intervaloDeVerificacao);

    } else if (modo_cobranca == "fixa") {

    }





































    var loc = se_alugado_dados[0].horas_locacaoSuite // Quantidade de Horas Locada da Suíte
    //var modo_cobranca = se_alugado_dados[0].cobrancaSuite
    var tol = se_alugado_dados[0].toleranciaSuite

    var dat = buscar_se_alugado[0].datahora
    var val = parseFloat(buscar_se_alugado[0].valor)

    var agora = hora_atual_segundos()
    var subtr = moment(agora, "HH:mm:ss").diff(moment(dat, "HH:mm:ss"))
    var parsi = moment.duration(subtr)
    var passo = Math.floor(parsi.asHours()) + moment.utc(subtr).format(":mm:ss")

    var passado = String(passo).split(":")
    var locacao = precos[0].locacao // Preço da Suíte
    var horaLo = passado[0]
    var minuto = passado[1]

    let c1 = parseInt(horaLo) > parseInt(loc)
    let c2 = parseInt(horaLo) == parseInt(loc) + 1
    let c3 = parseInt(minuto) > parseInt(tol)
    let c4 = parseInt(horaLo) > parseInt(loc) + 1
    let c5 = parseInt(horaLo) - parseInt(loc)

    if (modo_cobranca == "hora") {

      let valores = {
        1: parseFloat(precos[0].vh1),
        2: parseFloat(precos[0].vh2),
        3: parseFloat(precos[0].vh3),
        4: parseFloat(precos[0].vh4),
        5: parseFloat(precos[0].vh5),
        6: parseFloat(precos[0].vh6)
      }

      //console.log(passado)
  
      if (passado[0] >= loc && passado[1] > tol) {
        //console.log(valores[passado[0]])
      }

      // let h1 = parseFloat(precos[0].vh1)
      // let h2 = parseFloat(precos[0].vh2)
      // let h3 = parseFloat(precos[0].vh3)
      // let h4 = parseFloat(precos[0].vh4)
      // let h5 = parseFloat(precos[0].vh5)
      // let h6 = parseFloat(precos[0].vh6)

      // let d1 = val - h1
      // let d2 = val - h2
      // let d3 = val - h3
      // let d4 = val - h4
      // let d5 = val - h5
      // let d6 = val - h6

      // // valor quarto - valor nova hora
      // // valor quarto + diferenca

      // if (c1 && c2 && c3) {
      //   c5 == 1 ? alterarValor(suite, val + d1) :
      //     c5 == 2 ? alterarValor(suite, val + d2) :
      //       c5 == 3 ? alterarValor(suite, val + d3) :
      //         c5 == 4 ? alterarValor(suite, val + d4) :
      //           c5 == 5 ? alterarValor(suite, val + d5) :
      //             c5 == 6 ? alterarValor(suite, val + d6) : ""
      //   if (c5 > 7) {
      //     for (const x of Array(7).keys()) {
      //       var i = x + 1
      //       var valoracrescentado = parseFloat(locacao) * i
      //       var acrescimo = val + parseFloat(valoracrescentado)
      //       alterarValor(suite, acrescimo)
      //     }
      //   }
      // } else if (c4 && c3) {
      //   c5 == 1 ? alterarValor(suite, val + d1) :
      //     c5 == 2 ? alterarValor(suite, val + d2) :
      //       c5 == 3 ? alterarValor(suite, val + d3) :
      //         c5 == 4 ? alterarValor(suite, val + d4) :
      //           c5 == 5 ? alterarValor(suite, val + d5) :
      //             c5 == 6 ? alterarValor(suite, val + d6) : ""
      //   if (c5 > 7) {
      //     for (const x of Array(7).keys()) {
      //       var i = x + 1
      //       var valoracrescentado = parseFloat(locacao) * i
      //       var acrescimo = val + parseFloat(valoracrescentado)
      //       alterarValor(suite, acrescimo)
      //     }
      //   }
      // }
    } else if (modo_cobranca == "fixa") {
      if (parseInt(horaLo) >= 1 && parseInt(minuto) > parseInt(tol)) {
        var resultado = parseInt(horaLo) * parseFloat(locacao)
        alterarValor(suite, resultado)
      }
    }
  } catch (error) {
    sessionStorage.setItem("porHora.js", `[LOGS] | ${error}`)
  }
}

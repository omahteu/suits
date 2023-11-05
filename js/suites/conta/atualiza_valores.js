import { hora_atual_segundos } from "../../geradores/hora.js"
import { alterarValor } from "../../quartos/ajax/alterar.js"
import receber from "../../quartos/auxiliares/funcao4.js"
import { RAIZ } from "../../raiz.js"
import {insereValor} from "../../pernoite/ajax/inserir.js"
import pernoite from "../../tags/pernoite.js"
import alterar from "../../olivia/altera.js"
import salvar from "../../olivia/salva.js"

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
    var se_alugado_dados = suites.filter(e => e.numeroSuite == suite)
    var tolerancia = parseInt(se_alugado_dados[0].toleranciaSuite)
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

        const diferencaSegundos = horaAtual.diff(horarioRegistrado, 'seconds');
        const minutos = Math.floor((diferencaSegundos % 3600) / 60);

        if (diferencaEmHoras > 0 && diferencaEmHoras <= 1 && minutos > tolerancia) {
          alterarValor(suite, funil_precos[0].vh2)
        } else if (diferencaEmHoras > 1 && diferencaEmHoras <= 2 && minutos > tolerancia) {
          alterarValor(suite, funil_precos[0].vh3)
        } else if(diferencaEmHoras > 2 && diferencaEmHoras <= 3 && minutos > tolerancia) {
          alterarValor(suite, funil_precos[0].vh4)
        } else if (diferencaEmHoras > 3 && diferencaEmHoras <= 4 && minutos > tolerancia) {
          alterarValor(suite, funil_precos[0].vh5)
        } else if (diferencaEmHoras > 4 && diferencaEmHoras <= 5 && minutos > tolerancia) {
          alterarValor(suite, funil_precos[0].vh6)
        } else if (diferencaEmHoras > 5 && diferencaEmHoras <= 6 && minutos > tolerancia) {
          alterarValor(suite, parseFloat(parseInt(funil_precos[0].vh6) + 10).toFixed(2))
        } else if (diferencaEmHoras > 6 && diferencaEmHoras <= 7 && minutos > tolerancia) {
          alterarValor(suite, parseFloat(parseInt(funil_precos[0].vh6) + 20).toFixed(2))
        } else if (diferencaEmHoras > 7 && diferencaEmHoras <= 8 && minutos > tolerancia) {
          comecando_pernoite()
        }
      }
      setTimeout(() => {
        verificarHoraPassada()
      }, 1000);

    } else if (modo_cobranca == "fixa") {
      let funil = alugados.filter(x => x.suite == suite)
      let iniciado = funil[0].hora
      let horarioRegistrado = moment(iniciado, 'HH:mm:ss');
      let funil_suites = suites.filter(o => o.numeroSuite == funil[0].suite)
      let funil_precos = precos.filter(u => u.codigo == funil_suites[0].codigoSuite)
      function verificarHoraPassada() {
        const horaAtual = moment();
        const diferencaEmHoras = horaAtual.diff(horarioRegistrado, 'hours')

        const diferencaSegundos = horaAtual.diff(horarioRegistrado, 'seconds');
        const minutos = Math.floor((diferencaSegundos % 3600) / 60);

        if (diferencaEmHoras >= 0 && diferencaEmHoras < 1 && minutos > tolerancia) {
          alterarValor(suite, parseInt(funil_precos[0].locacao) * 2)
        } else if (diferencaEmHoras >= 1 && diferencaEmHoras < 2 && minutos > tolerancia) {
          alterarValor(suite, parseInt(funil_precos[0].locacao) * 3)
        } else if(diferencaEmHoras >= 2 && diferencaEmHoras < 3 && minutos > tolerancia) {
          alterarValor(suite, parseInt(funil_precos[0].locacao) * 4)
        } else if (diferencaEmHoras >= 3 && diferencaEmHoras < 4 && minutos > tolerancia) {
          alterarValor(suite, parseInt(funil_precos[0].locacao) * 5)
        } else if (diferencaEmHoras >= 4 && diferencaEmHoras < 5 && minutos > tolerancia) {
          alterarValor(suite, parseInt(funil_precos[0].locacao) * 6)
        } else if (diferencaEmHoras >= 5 && diferencaEmHoras < 6 && minutos > tolerancia) {
          alterarValor(suite, parseInt(funil_precos[0].locacao) * 7)
        } else if (diferencaEmHoras >= 6 && diferencaEmHoras < 7 && minutos > tolerancia) {
          alterarValor(suite, parseInt(funil_precos[0].locacao) * 8)
        } else if (diferencaEmHoras >=7 && diferencaEmHoras < 8 && minutos > tolerancia) {
          comecando_pernoite()
        }
      }
      setTimeout(() => {
        verificarHoraPassada()
      }, 1000);
    }
  } catch (error) {
    sessionStorage.setItem("porHora.js", `[LOGS] | ${error}`)
  }
}

async function comecando_pernoite() {
  const i1 = receber("dados_suites")
  const i2 = receber("tabela_precos")
  const i3 = receber("offs")
  const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/pernoite.php`) // pernoite
  const rs = await rq.json()
  if (rs["status"]) {
    rs["dados"].forEach(e => {
      let tipo = e.tipoPernoite
      let seAutomatica = tipo == "1"
      let seFixa = tipo == "2"
      if (seAutomatica) {
        i3.forEach(ele => {
          let ficha = i1.filter(i => i.numeroSuite == ele.suite)
          if (ele.tipo != "pernoite") {
            let codig = ficha[0].codigoSuite
            let fich2 = i2.filter(x => x.codigo == codig)
            ativar(ele.suite, fich2[0].pernoite)
          } 
        })
      } else if (seFixa) {
        i3.forEach(ili => {
          let ficha = i1.filter(i => i.numeroSuite == ili.suite)
          if (ili.tipo != "pernoite") {
            let codig = ficha[0].codigoSuite
            let fich2 = i2.filter(x => x.codigo == codig)
            ativar(ele.suite, fich2[0].pernoite)
          }
        })
      }
    });
  }
}

function ativar(suite, valorpernoite) {
  pernoite(suite)
  let dados2 = 'suite=' + suite + '&tipo=' + 'pernoite'
  alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados2)
  insereValor(suite, valorpernoite, "pernoite")
  setTimeout(() => {
    let box = 'suite=' + suite + '&modo=' + 'p' + '&tipo=' + 'per' + '&horario=' + hora_atual_segundos()
    salvar(`http://${RAIZ}/suits/php/suites/tarefas.php`, box)
  }, 1000);

}

// import link from "../../setup/index.js"
// import { data_atual } from "../../geradores/data.js"
// import { hora_atual } from "../../geradores/hora.js"
import { RAIZ } from "../../raiz.js"
// import alterar from "../../olivia/altera.js"

export async function alterarValor(suitex, valorx) {
    //console.log(`ENTRANDO | ${suitex} - ${valorx}`)
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`)
    const rs = await rq.json()
    if (rs["dados"]) {
        try {
            let filtroSuite = rs["dados"].filter(i => i.suite == suitex)
            let tipo = filtroSuite[0].tipo
            let condicaoDois = tipo == "locado"
            // var atualpaid = (parseInt(valorx) + parseInt(filtroSuite[0].valor))
            //console.log(`COFRE | ${filtroSuite[0].valor}`)
            if (condicaoDois) {
                $.ajax({
                    url: `http://${RAIZ}/suits/php/suites/editarcofre.php`,
                    type: "POST",
                    dataType: "json",
                    data: {
                        antigo: suitex,
                        novo: valorx,
                    },
                    success: (data) => { console.log(data) }
                })
                // let dados = 'antigo=' + suitex + '&novo=' + novovalor
                // alterar(`http://${RAIZ}/suits/php/suites/editarcofre.php`, dados)
            }
        } catch (error) {
            sessionStorage.setItem("alterar.js", `[LOGS] | ${error}`)
        }
    } else {
        console.log('aaaaaaaaaaaaaaaaaaaaa')
    }
}

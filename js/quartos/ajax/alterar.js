import link from "../../setup/index.js"
import { data_atual } from "../../geradores/data.js"
import { hora_atual } from "../../geradores/hora.js"
import { RAIZ } from "../../raiz.js"

export async function alterarValor(suitex, valorx) {

    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`)
    const rs = await rq.json()
    if (rs["dados"]) {


        try {
            let filtroSuite = rs["dados"].filter(i => i.suite == suitex)
            let tipo = filtroSuite[0].tipo
            let condicaoDois = tipo == "locado"
            if (condicaoDois && filtroSuite[0].valor != valorx) {
                $.ajax({
                    url: `http://${RAIZ}/suits/php/suites/editarcofre.php`,
                    type: "POST",
                    dataType: "json",
                    data: {
                        antigo: suitex,
                        novo: valorx,
                    },
                    success: () => { console.log(mensagem) }
                })
            }
        } catch (error) {
            sessionStorage.setItem("alterar.js", `[LOGS] | ${error}`)
        }



    }



    // $.get(link[36], (e) => {
    //     try {
    //         let mensagem = `[SUCESSO] | Atualização de preço na suíte ${suitex} aplicada! | ${data_atual()} - ${hora_atual()}`
    //         let filtroSuite = e.filter(i => i.suite == suitex)
    //         let tipo = filtroSuite[0].tipo
    //         let condicaoDois = tipo == "locacao"
    //         if (condicaoDois) {
    //             let id = filtroSuite[0].id
    //             $.ajax({
    //                 url: `${link[36]}${id}/`,
    //                 type: "PUT",
    //                 dataType: "json",
    //                 data: {
    //                     suite: suitex,
    //                     valor: valorx,
    //                     tipo: tipo
    //                 },
    //                 success: () => { console.log(mensagem) }
    //             })
    //         }
    //     } catch (error) {
    //         sessionStorage.setItem("alterar.js", `[LOGS] | ${error}`)
    //     }
    // })
}

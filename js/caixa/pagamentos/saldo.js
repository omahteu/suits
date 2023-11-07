import {RAIZ} from "../../raiz.js"
import { data_atual } from "../../geradores/data.js"

export async function saldo() {
    setTimeout(async () => {
        let dinheiro = localStorage.getItem('dinheiro') == null ? '0' : localStorage.getItem('dinheiro')
        let pix = localStorage.getItem('pix') == null ? '0' : localStorage.getItem('pix')
        let credito = localStorage.getItem('credito') == null ? '0' : localStorage.getItem('credito')
        let debito = localStorage.getItem('debito') == null ? '0' : localStorage.getItem('credito')

        const dataAtual = moment();
        const dataOntem = dataAtual.subtract(1, 'days');
        let ontem = dataOntem.format('YYYY-MM-DD')


        let soma = 0
        let usuario = localStorage.getItem('nome')
        let fundo = localStorage.getItem("fundo")
        let hoje = String(data_atual())
        const rq = await fetch(`http://${RAIZ}/suits/php/caixa/show/pagamentos.php`)
        const rs = await rq.json()
        if (rs["status"]) {
            setTimeout(() => {
                let pagamentosUsuariosHoje = rs["dados"].filter(zin => zin.usuario === usuario && zin.data === hoje)
                let pagamentosUsuariosOntem = rs["dados"].filter(zin => zin.usuario === usuario && zin.data === ontem)

                pagamentosUsuariosOntem.forEach(item => {

                    const valores = item.valor;
                    soma += parseFloat(valores);

                });

                pagamentosUsuariosHoje.forEach(item => {

                    const valores = item.valor;
                    soma += parseFloat(valores);

                });
                let totalCaixa = parseFloat(soma) + parseFloat(fundo)
                $("#tab_saldo").html(
                    `
                        <tr>
                            <td id="saldo_caixa">${totalCaixa.toFixed(2)}</td>
                            <td>${parseFloat(dinheiro).toFixed(2)}</td>
                            <td>${parseFloat(pix).toFixed(2)}</td>
                            <td>${parseFloat(credito).toFixed(2)}</td>
                            <td>${parseFloat(debito).toFixed(2)}</td>
                        </tr>
                    `
                )
            }, 1000);
        }
    }, 1000);
}

// async function buscaSangrias(valor) {
//     let dinheiro = localStorage.getItem('dinheiro') == null ? '0' : localStorage.getItem('dinheiro')
//     let pix = localStorage.getItem('pix') == null ? '0' : localStorage.getItem('pix')
//     let credito = localStorage.getItem('credito') == null ? '0' : localStorage.getItem('credito')
//     let debito = localStorage.getItem('debito') == null ? '0' : localStorage.getItem('credito')

//     let usuario = localStorage.getItem("nome")
//     let soma = 0
//     const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/sangrias.php`)
//     const rs = await rq.json()
//     if (rs["dados"]) {
//         let sangriasRealizadas = rs["dados"].filter(zin => zin.usuario = usuario)
//         sangriasRealizadas.forEach(item => {
//             if (item.dia == String(data_atual())) {
//                 const valores = item.valor;
//                 soma += parseFloat(valores);
//             }
//         });
//         let saldoAtualizado = parseFloat(valor) - parseFloat(soma)
//         $("#tab_saldo").html(
//             `
//                 <tr>
//                     <td id="saldo_caixa">${saldoAtualizado.toFixed(2)}</td>
//                     <td>${parseFloat(dinheiro).toFixed(2)}</td>
//                     <td>${parseFloat(pix).toFixed(2)}</td>
//                     <td>${parseFloat(credito).toFixed(2)}</td>
//                     <td>${parseFloat(debito).toFixed(2)}</td>
//                 </tr>
//             `
//         )
//     } else {
//         let saldoAtualizado = parseFloat(valor) - parseFloat(0)
//         $("#tab_saldo").html(
//             `
//                 <tr>
//                     <td id="saldo_caixa">${saldoAtualizado.toFixed(2)}</td>
//                     <td>${parseFloat(dinheiro).toFixed(2)}</td>
//                     <td>${parseFloat(pix).toFixed(2)}</td>
//                     <td>${parseFloat(credito).toFixed(2)}</td>
//                     <td>${parseFloat(debito).toFixed(2)}</td>
//                 </tr>
//             `
//         )
//     }
// }

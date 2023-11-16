import { RAIZ } from "../../raiz.js"
import { data_atual } from "../../geradores/data.js"

export async function saldo() {
    setTimeout(async () => {
        const dataAtual = moment();
        const dataOntem = dataAtual.subtract(1, 'days');
        let ontem = dataOntem.format('DD/MM/YYYY');
        const limiteHora = moment("19:00:00", "HH:mm:ss")
        const limiteorra = moment("07:00:00", "HH:mm:ss")
        let usuario = localStorage.getItem('nome')
        let operacao = localStorage.getItem('operacao')
        const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/ocupacoes.php`)
        const rs = await rq.json()
        if (rs["status"]) {
            setTimeout(() => {
                let pagamentosUsuarios = rs["dados"].filter(zin => zin.usuario === usuario)
                operantisModus(pagamentosUsuarios, operacao, ontem, limiteorra, limiteHora)
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

function operantisModus(dados, operacao, ontem, limiteorra, limiteHora) {
    let dinheiro = localStorage.getItem('dinheiro') == null ? '0' : localStorage.getItem('dinheiro')
    let pix = localStorage.getItem('pix') == null ? '0' : localStorage.getItem('pix')
    let credito = localStorage.getItem('credito') == null ? '0' : localStorage.getItem('credito')
    let debito = localStorage.getItem('debito') == null ? '0' : localStorage.getItem('debito')
    let soma = 0
    let fundo = localStorage.getItem("fundo")
    var ocupacoes = document.getElementById('tab_saldo')
    ocupacoes.innerHTML = ''
    dados.forEach(e => {
        if (operacao == '1') {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') ||
                moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day')
            ) {
                if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(ontem, 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isAfter(moment(limiteHora, "HH:mm:ss"))
                ) {
                    const valores = e.total;
                    soma += parseFloat(valores);
                } else if (
                    moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') &&
                    moment(e.saida, "HH:mm:ss").isBefore(moment(limiteorra, "HH:mm:ss"))
                ) {
                    const valores = e.total
                    soma += parseFloat(valores)
                }
            }
        } else {
            if (
                moment(e.data, 'DD/MM/YYYY').isSame(moment(data_atual(), 'DD/MM/YYYY'), 'day') 
            ) {
                const valores = e.total
                soma += parseFloat(valores)
            }
        }
    })

    let totalCaixa = parseFloat(soma) + parseFloat(fundo)
    let totalCaixaSemFundo = totalCaixa - fundo

    $("#tab_saldo").html(
        `
            <tr>
                <td id="saldo_caixa">${totalCaixa.toFixed(2)}</td>
                <td id="saldo_caixa_sem_fundo">${totalCaixaSemFundo.toFixed(2)}</td>
                <td>${parseFloat(dinheiro).toFixed(2)}</td>
                <td>${parseFloat(pix).toFixed(2)}</td>
                <td>${parseFloat(credito).toFixed(2)}</td>
                <td>${parseFloat(debito).toFixed(2)}</td>
            </tr>
        `
    )
}

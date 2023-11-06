import {RAIZ} from "../../raiz.js"
import { data_atual } from "../../geradores/data.js"

export async function saldo() {
    let soma = 0
    let usuario = localStorage.getItem('nome')
    let fundo = localStorage.getItem("fundo")
    const rq = await fetch(`http://${RAIZ}/suits/php/caixa/show/pagamentos.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        setTimeout(() => {
            let pagamentosUsuarios = rs["dados"].filter(zin => zin.usuario = usuario)
            pagamentosUsuarios.forEach(item => {
                if (item.data == String(data_atual())) {
                    const valores = item.valor;
                    soma += parseFloat(valores);
                }
            });
            let totalCaixa = parseFloat(soma) + parseFloat(fundo)
            buscaSangrias(totalCaixa)
        }, 1000);
    }
}

async function buscaSangrias(valor) {
    let dinheiro = localStorage.getItem('dinheiro') == null ? '0' : localStorage.getItem('dinheiro')
    let pix = localStorage.getItem('pix') == null ? '0' : localStorage.getItem('pix')
    let credito = localStorage.getItem('credito') == null ? '0' : localStorage.getItem('credito')
    let debito = localStorage.getItem('debito') == null ? '0' : localStorage.getItem('credito')

    let usuario = localStorage.getItem("nome")
    let soma = 0
    const rq = await fetch(`http://${RAIZ}/suits/php/relatorios/sangrias.php`)
    const rs = await rq.json()
    if (rs["dados"]) {
        let sangriasRealizadas = rs["dados"].filter(zin => zin.usuario = usuario)
        sangriasRealizadas.forEach(item => {
            if (item.dia == String(data_atual())) {
                const valores = item.valor;
                soma += parseFloat(valores);
            }
        });
        let saldoAtualizado = parseFloat(valor) - parseFloat(soma)
        $("#tab_saldo").html(
            `
                <tr>
                    <td id="saldo_caixa">${saldoAtualizado.toFixed(2)}</td>
                    <td>${parseFloat(dinheiro).toFixed(2)}</td>
                    <td>${parseFloat(pix).toFixed(2)}</td>
                    <td>${parseFloat(credito).toFixed(2)}</td>
                    <td>${parseFloat(debito).toFixed(2)}</td>
                </tr>
            `
        )
    } else {
        let saldoAtualizado = parseFloat(valor) - parseFloat(0)
        $("#tab_saldo").html(
            `
                <tr>
                    <td id="saldo_caixa">${saldoAtualizado.toFixed(2)}</td>
                    <td>${parseFloat(dinheiro).toFixed(2)}</td>
                    <td>${parseFloat(pix).toFixed(2)}</td>
                    <td>${parseFloat(credito).toFixed(2)}</td>
                    <td>${parseFloat(debito).toFixed(2)}</td>
                </tr>
            `
        )
    }
}

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
        console.log(saldoAtualizado)
        $("#tab_saldo").html(
            `
                <tr><td id="saldo_caixa">${saldoAtualizado.toFixed(2)}</td></tr>
            `
        )
    } else {
        let saldoAtualizado = parseFloat(valor) - parseFloat(0)
        console.log(saldoAtualizado)
        $("#tab_saldo").html(
            `
                <tr><td id="saldo_caixa">${saldoAtualizado.toFixed(2)}</td></tr>
            `
        )
    }
}

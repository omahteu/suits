import desligar_luz from "../../../automacao/desligar.js"
import ultima_limpeza from "../../../botoes/limpar.js"
import envia_dados_manutencao from "../../../caixa/manutencao.js"
import { data_atual } from "../../../geradores/data.js"
import { hora_atual } from "../../../geradores/hora.js"
import encerrar_tarefas from "../../../limpar/tarefas.js"
import { fimMenu } from "../../../setup/menu.js"
import { stop } from "../../../setup/stop_relogios.js"
import { clean } from "../../../setup/clean_relogios.js"
import desfazer from "../../../tags/desfazer.js"
import receber from "../../../quartos/auxiliares/funcao4.js"


export default function suite_fica_disponivel(suite, usuario, tempo) {
    // Variáveis
    let base = receber("offs")
    let tipo = base.filter(t => t.suite == suite)
    let verificaoLuz = localStorage.getItem("luz")

    // Confirmação
    if (confirm(`Disponibilizar a Suíte ${suite}?`)) {
        // Fim da Manutenção
        setTimeout(() => {
            if (tipo[0].tipo == "manutencao") {
                let razao = localStorage.getItem("motivo")
                envia_dados_manutencao(usuario, data_atual(), hora_atual(), suite, razao, tempo)
                encerrar_tarefas(suite)
            }
        }, 100)

        // Remoção do Registro de Uso da Suíte
        setTimeout(() => { ultima_limpeza(suite) }, 200)

        // Apagando a Luz
        if (verificaoLuz == "ligada") {
            setTimeout(() => {
                desligar_luz(suite)
                localStorage.setItem("luz", "desligada")
            }, 300)
        }

        // Remoção do Registro de Locação
        setTimeout(() => { encerrar_tarefas(suite) }, 400)

        // Tirando a Suíte do Status Atual
        setTimeout(() => { desfazer(suite) }, 500)

        // Tirando a Suíte do Status Atual
        setTimeout(() => { desfazer(suite) }, 600)

        // Fechando o Modal
        setTimeout(() => { fimMenu() }, 700)

        setTimeout(() => {
            stop[suite]()
            clean[suite](suite)
        }, 800);
    }
}

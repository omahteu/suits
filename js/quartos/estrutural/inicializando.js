import { buscaLocacoes } from "../auxiliares/funcao1.js"
import { buscaSuites } from "../auxiliares/funcao2.js"
import { buscaPrecos } from "../auxiliares/funcao3.js"
import {tarefas} from "../auxiliares/funcao5.js"

$(window).on("load", function () {
    buscaPrecos()
})

setInterval(() => {
    buscaLocacoes()
    buscaSuites()
    tarefas()
}, 500);

// criar função que dispaare esse atualizador ao invés de ficar executando direto
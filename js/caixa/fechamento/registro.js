import link from "../../setup/index.js"
import { data_atual } from "../../geradores/data.js"
import salvar from "../../olivia/salva.js"

var soma = 0

export default async function _relatorio() {
    var hoje = data_atual()
    var nome = localStorage.getItem("nome")
    const rq = await fetch(link[1])
    const rs = await rq.json()
    rs.forEach(e => {
        if (e.nome == nome && e.data == hoje) {
            soma += Number(e.tempo)
        }
    })
    var nota = {
        tempo: soma,
        nome: nome,
        data: hoje
    }
    salvar(link[0], nota)
}

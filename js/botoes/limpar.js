import link from "../setup/index.js"
import apagar from "../olivia/apaga.js"
import receber from "../quartos/auxiliares/funcao4.js"

export default function ultima_limpeza(suite) {
    localStorage.removeItem("dadosQuarto")
    localStorage.removeItem(`codigo${suite}`)
    localStorage.removeItem("quarto")
    let onze = receber("offs")
    var dados = onze.filter(quartos => quartos.suite == suite)
    var id = dados[0].id
    apagar(`${link[11]}${id}/`)
    $.get(link[5], (e) => {
        var dados = e.filter(quartos => quartos.quarto == suite)
        dados.forEach(e => {
            apagar(`${link[5]}${e.id}/`)
        });
    })
}

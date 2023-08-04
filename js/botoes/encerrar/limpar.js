import apagar from "../../olivia/apaga.js"

import link from "../../setup/index.js"

export default function limpando() {
    let suite = localStorage.getItem("last")
    $.get(link[5], (e) => {
        let dados = e.filter(i => i.quarto == suite)
        dados.forEach(x => {
            let url = `${link[5]}${x.id}/`
            apagar(url)
        });
    })
    $.get(link[15], (e) => {
        let dados = e.filter(i => i.quarto == suite)
        dados.forEach(x => {
            let url = `${link[15]}${x.id}/`
            apagar(url)
        });
    })
    localStorage.removeItem("last")
    localStorage.removeItem(`troca${suite}`)
    localStorage.removeItem(`codigo${suite}`)
}

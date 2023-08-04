import link from "../setup/index.js"
import apagar from "../olivia/apaga.js"

export default async function encerrar_tarefas(suite) {
    const rq = await fetch(link[34])
    const rs = await rq.json()
    let dados = rs.filter(e => e.suite == suite)
    dados.forEach(i => {
        let url = `${link[34]}${i.id}/`
        apagar(url)
    });
}

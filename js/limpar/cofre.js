import link from "../setup/index.js"
import apagar from "../olivia/apaga.js"

export default async function fechar_cofre(suite) {
    const rq = await fetch(link[36])
    const rs = await rq.json()
    let dados = rs.filter(e => e.suite == suite)
    dados.forEach(i => {
        let url = `${link[36]}${i.id}/`
        apagar(url)
    });
}

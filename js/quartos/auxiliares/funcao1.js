import link from "../../setup/index.js"

export async function buscaLocacoes() {
    const rq = await fetch(link[11])
    const rs = await rq.json()
    sessionStorage.setItem("offs", JSON.stringify(rs))
}

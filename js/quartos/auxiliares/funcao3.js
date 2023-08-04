import link from "../../setup/index.js"

export async function buscaPrecos() {
    const rq = await fetch(link[21])
    const rs = await rq.json()
    sessionStorage.setItem("tabela_precos", JSON.stringify(rs))
}

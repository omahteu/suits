import link from "../../setup/index.js"

export async function buscaSuites() {
    const rq = await fetch(link[17])
    const rs = await rq.json()
    sessionStorage.setItem("dados_suites", JSON.stringify(rs))
}

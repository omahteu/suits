import link from "../../setup/index.js"

export async function tarefas() {
    const rq = await fetch(link[34])
    const rs = await rq.json()
    sessionStorage.setItem("tarefas", JSON.stringify(rs))
}

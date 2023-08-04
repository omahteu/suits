import link from "../../setup/index.js";

export async function _dados() {
    const rq = await fetch(link[33])
    const rs = await rq.json()
    sessionStorage.setItem("pagamentos", JSON.stringify(rs))
}

// import link from "../../setup/index.js"

export async function dadosCaixa() {
    const rq = await fetch(link[11])
    const rs = await rq.json()
    console.log(rs)
}

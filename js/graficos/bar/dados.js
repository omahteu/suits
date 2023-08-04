import {url} from "../../../urlbase.js"

export var loc = []
export let cpm = {}

export async function dadosOcupacao() {
    const rq = await fetch(`${url}`)
    const rs = await rq.json()
    rs.forEach(e => {
        loc.push(e.tipo)
    });
}

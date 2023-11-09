import { valoresIniciais } from "../quartos/calculos/inicial.js"

export default function locado(suite) {
    $(`.cardBox .card:nth-child(${suite})`).css({
        "background": "#FF0000"
    })
    valoresIniciais(suite)
}

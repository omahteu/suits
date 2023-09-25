export default function aguardando(q) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FFFFFF"
    })
}

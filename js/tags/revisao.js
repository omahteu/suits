export default function revisao(q) {
    // Colorindo o card
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#A020F0"
    })
}

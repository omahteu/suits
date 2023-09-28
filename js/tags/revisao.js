export default function revisao(q) {
    // Colorindo o card
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "rgb(255, 255, 255)"
    })
}

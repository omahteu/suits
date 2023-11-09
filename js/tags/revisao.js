export default function revisao(suite) {
    $(`.cardBox .card:nth-child(${suite})`).css({
        "background": "#A020F0"
    })
}

export default function faxina(suite) {
    $(`.cardBox .card:nth-child(${suite})`).css({
        "background": "#FFE4C4"
    })
}

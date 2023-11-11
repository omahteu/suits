export default function pernoite(suite) {
    $(`.cardBox .card:nth-child(${suite})`).css({
        "background": "#EE82EE"
    })
}

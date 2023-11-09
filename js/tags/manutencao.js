export default function manutencao(suite) {
    $(`.cardBox .card:nth-child(${suite})`).css({
        "background": "rgb(169, 169, 169)"
    })
}

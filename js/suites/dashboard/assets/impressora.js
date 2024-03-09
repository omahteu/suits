import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function exibirImpressora() {
    const url = make_url("impressoras/show", "emuso.php")
    fazerRequisicaoAjax(url, "GET", null, function(response) {
        const data = JSON.parse(response)
        if(data.status) {
            if (data.dados[0].parcial == 's') {
                $("#li3").hide()
            }
        }
    }, function(error) {
        console.log(error)
    })
}

import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function exibirImpressora() {
    const url = make_url("somelier", "main.php")
    fazerRequisicaoAjax(url, "POST", {tabela: 'impressora'}, function(response) {
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

import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function buscalocacoes() {
    const url = make_url("suites/show", "infos.php")
    
    fazerRequisicaoAjax(url, "GET", null, function(response) {
        const data = JSON.parse(response)

        if (data.status) {
            sessionStorage.setItem("offs", JSON.stringify(rs["dados"]))
        } else {
            sessionStorage.setItem("offs", JSON.stringify([]))
        }
    }, function(error) {
        console.log(error)
    })
}

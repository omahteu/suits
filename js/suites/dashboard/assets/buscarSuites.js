import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function buscasuites() {
    const url = make_url("suites/show", "suites.php")

    fazerRequisicaoAjax(url, "GET", null, function(response) {
        const data = JSON.parse(response)
        if (data.status) {
            sessionStorage.setItem("dados_suites", JSON.stringify(rs["dados"]))
        }
    }, function(error) {
        console.log(error)
    })
}

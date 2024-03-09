import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function buscaprecos() {
    const url = make_url("suites/show", "precos.php")
    
    fazerRequisicaoAjax(url, "GET", null, function(response) {
        const data = JSON.parse(response)
        if (data.status) {
            sessionStorage.setItem("tabela_precos", JSON.stringify(rs["dados"]))
        }
    }, function(error) {
        console.log(error)
    })
}

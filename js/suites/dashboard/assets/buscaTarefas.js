import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function buscatarefas() {
    const url = make_url("suites/show", "tarefas.php")
    fazerRequisicaoAjax(url, "GET", null, function(response) {
        const data = JSON.parse(response)
        if (data.status) {
            sessionStorage.setItem("tarefas", JSON.stringify(rs["dados"]))
        }
    }, function(error) {
        console.log(error)
    })
}

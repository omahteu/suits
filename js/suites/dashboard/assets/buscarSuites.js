import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function buscasuites() {    console.log('fds')
    const url = make_url("somelier", "main.php")
    fazerRequisicaoAjax(url, "POST", {tabela: "suite"}, function(response) {
        const data = JSON.parse(response)
        if (data.status) {
            sessionStorage.setItem("dados_suites", JSON.stringify(data.dados))
        } else {
            sessionStorage.setItem("dados_suites", JSON.stringify([]))
        }
    }, function(error) {
        console.log(error)
    })
}

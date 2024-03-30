import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function buscatarefas() {
    const url = make_url("somelier", "main.php")
    fazerRequisicaoAjax(url, "POST", {tabela: "tarefa"}, function(response) {
        const data = JSON.parse(response)
        console.table(data)
        if (data.status) {
            sessionStorage.setItem("tarefas", JSON.stringify(data.dados))
        } else {
            sessionStorage.setItem("tarefas", JSON.stringify([]))
        }
    }, function(error) {
        console.log(error)
    })
}

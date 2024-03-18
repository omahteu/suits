import make_url from "../../../tools/urls.js"
import fazerRequisicaoAjax from "../../../tools/ajax.js"

export default function buscaprecos() {
    const url = make_url("somelier", "main.php")
    
    fazerRequisicaoAjax(url, "POST", {tabela: "valor"}, function(response) {
        const data = JSON.parse(response)
        if (data.status) {
            sessionStorage.setItem("tabela_precos", JSON.stringify(data.dados))
        }
    }, function(error) {
        console.log(error)
    })
}

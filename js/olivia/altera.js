const mensagem = "[SUCESSO] | Olivia alterou todos os dados solicitados!"
export default function alterar(url, dados, alerta = false, alerta_mensagem = "", recarregar = false, resetar = ""){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: 'PATCH',
        data: JSON.stringify(dados),
        success: function () {
            sessionStorage.removeItem("fichas")
            console.log(mensagem)
            alerta == true ? alert(alerta_mensagem) : ""
            recarregar == true ? location.reload() : ""
            resetar != "" ? document.getElementById(resetar).reset() : ""
        },
        error: function (textStatus, errorThrown) {
            sessionStorage.setItem("altera.js", `[LOGS] | ${textStatus} - ${errorThrown}`)
        }
    })
}

const mensagem = "[SUCESSO] | Olivia salvou todos os dados solicitados!"
export default function salvar(url, dados, alerta = false, alerta_mensagem = "", recarregar = false, resetar = ""){
    $.post(url, dados, () => {
        console.log(mensagem)
        alerta == true ? alert(alerta_mensagem) : ""
        recarregar == true ? location.reload() : ""
        resetar != "" ? document.getElementById(resetar).reset() : ""
    })
}

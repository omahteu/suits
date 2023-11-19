const mensagem = "[SUCESSO] | Olivia alterou todos os dados solicitados!"
export default function alterar(url, dados,  alerta = false, recarregar = false, resetar = ""){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alerta == true ? alert(mensagem) : ""
            recarregar == true ? location.reload() : ""
            resetar != "" ? document.getElementById(resetar).reset() : ""
        }
    };
    xhr.send(dados);
}

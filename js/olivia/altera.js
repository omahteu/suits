const mensagem = "[SUCESSO] | Olivia alterou todos os dados solicitados!"
export default function alterar(url, dados, tabela,  alerta = false, alerta_mensagem = "", recarregar = false, resetar = ""){
    // $.ajax({
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     url: url,
    //     type: 'PATCH',
    //     data: JSON.stringify(dados),
    //     success: function () {
    //         sessionStorage.removeItem("fichas")
    //         console.log(mensagem)
    //         alerta == true ? alert(alerta_mensagem) : ""
    //         recarregar == true ? location.reload() : ""
    //         resetar != "" ? document.getElementById(resetar).reset() : ""
    //     },
    //     error: function (textStatus, errorThrown) {
    //         sessionStorage.setItem("altera.js", `[LOGS] | ${textStatus} - ${errorThrown}`)
    //     }
    // })


    var xhr = new XMLHttpRequest();
    // var url = url;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // A resposta do PHP pode ser manipulada aqui (se necessário)
            console.log(xhr.responseText);

            alerta == true ? alert(mensagem) : ""
            recarregar == true ? location.reload() : ""
            resetar != "" ? document.getElementById(resetar).reset() : ""
        }
    };

    // var dados = "suite=" + suite + "&modo=" + modo + "&tipo=" + tipo + "&horario=" + String(formatarData(data));
    xhr.send(dados);
}

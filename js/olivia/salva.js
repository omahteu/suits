const mensagem = "[SUCESSO] | Olivia salvou todos os dados solicitados!"
// export default function salvar(url, dados, alerta = false, alerta_mensagem = "", recarregar = false, resetar = ""){
//     $.post(url, dados, () => {
//         console.log(mensagem)
//         alerta == true ? alert(alerta_mensagem) : ""
//         recarregar == true ? location.reload() : ""
//         resetar != "" ? document.getElementById(resetar).reset() : ""
//     })
// }

export default async function salvar(url, dados, alerta = false, mensagem = "", recarregar = false, resetar = "") {

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

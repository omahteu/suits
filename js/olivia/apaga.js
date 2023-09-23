// const mensagem = "[SUCESSO] | Olivia excluiu todos os dados solicitados!"
export default function apagar(url, dados){
    // $.ajax({
	// 	url: url,
	// 	method: 'DELETE',
	// 	dataType: 'json',
	// 	success: () => {
	// 		console.log(mensagem)
	// 	}
	// })

	var xhr = new XMLHttpRequest();
    // var url = url;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // A resposta do PHP pode ser manipulada aqui (se necessário)
            console.log(xhr.responseText);

            // alerta == true ? alert(mensagem) : ""
            // recarregar == true ? location.reload() : ""
            // resetar != "" ? document.getElementById(resetar).reset() : ""
        }
    };

    // var dados = "suite=" + suite + "&modo=" + modo + "&tipo=" + tipo + "&horario=" + String(formatarData(data));
    xhr.send(dados);
}

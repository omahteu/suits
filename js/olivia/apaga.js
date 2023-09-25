// const mensagem = "[SUCESSO] | Olivia excluiu todos os dados solicitados!"
export default function apagar(url, dados){
	var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // A resposta do PHP pode ser manipulada aqui (se necessário)
            console.log(xhr.responseText);
        }
    };

    xhr.send(dados);
}

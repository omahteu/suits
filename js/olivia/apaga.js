const mensagem = "[SUCESSO] | Olivia excluiu todos os dados solicitados!"
export default function apagar(url){
    $.ajax({
		url: url,
		method: 'DELETE',
		dataType: 'json',
		success: () => {
			console.log(mensagem)
		}
	})
}

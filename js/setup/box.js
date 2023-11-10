export function rg(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}

export function liviaExclui(url, identificador){
    $.ajax({
		url: url + identificador,
		method: 'DELETE',
		dataType: 'json',
		success: () => {
			console.log('excluídos!')
		}
	})
}

export function listaCamareiras(camareira){
    $.get(url, (resultado) => {
        var dados = resultado.filter(nomes => nomes.nome == camareira)
        dados.forEach(element => {
            sessionStorage.setItem('camareira'+element.nome, element.nome)
        });
    })
}

export function ret(){
    var nome_camareira = $("#camareira").text()
    return nome_camareira
}

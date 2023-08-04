import link from "../setup/index.js"

export async function ir(placa) {
    const requisicao = await fetch(link[27])
    const resposta = await requisicao.json()
    var url = `http://${placa}/?1*`
    $.ajax({ url: url, success: function (data) { location.reload(true); } });
}


export async function voltar(placa) {
    const requisicao = await fetch(link[27])
    const resposta = await requisicao.json()
    var url = `http://${placa}/?1d`
    $.ajax({ url: url, success: function (data) { location.reload(true); } });
    localStorage.setItem("luz", "apagada")
    $("#acoes3").val("Ligar Luz")
    localStorage.setItem("status_botao", "desligado")
}

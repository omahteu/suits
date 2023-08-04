async function listarClientes() {
    const dados = await fetch("http://localhost/suites/php/lerusuario.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]

        infos.forEach(e => {

            let token = String(e.token).slice(0, 25)
            
            /*$(".cardBox").append(`<li class="card">` +
                                    '<form method="POST" id="formon">'+
                                        '<span>TOny</span>'+
                                        '<span>dfsfds5fe9wf46s</span>'+
                                        `<input type="text" id="a1" name="a1">`+
                                        `<input type="text" id="a1" name="a1" value="${e.id}">`+
                                        `<input type="button" class="btn btn-primary" id="acionamento">`+
                                    '</form>'+
                                '</li>'
            )*/
            if (e.status == "" || e.status == "off"){

                $(".cardBox").append(`<li class="card">` +
                                        `<form method="POST" id="formon${e.id}">`+
                                            `<h3>${e.usuario}</h3>`+
                                            `<input type="text" id="" name="" value="${e.token}">`+
                                            `<input type="text" id="a1" name="a1" value="on">`+
                                            `<input type="text" id="a2" name="a2" value="${e.id}">`+
                                            `<input type="button" class="btn btn-success" id="acionamento" value="Habilitar">`+
                                        '</form>'+
                                    '</li>'
                )
                
                //$("#acionamento").removeClass("btn-primary").addClass("btn-success").val("Habilitar")
                /*
                let botao = document.querySelectorAll('#acionamento')
                console.log(botao)
                botao.classList.replace('btn-primary', 'btn-success')
                botao.value = "Habilitar"
                let campo = document.querySelectorAll('#a1')
                campo.value = "on"*/
                
                //$("#a1").val("on")
            } else {
                //$("#acionamento").removeClass("btn-success").addClass("btn-danger").val("Desabilitar")
                $(".cardBox").append(`<li class="card">` +
                                        `<form method="POST" id="formon${e.id}">`+
                                            `<h3>${e.usuario}</h3>`+
                                            `<input type="text" id="" name="" value="${e.token}">`+
                                            `<input type="text" id="a1" name="a1" value="off">`+
                                            `<input type="text" id="a2" name="a2" value="${e.id}">`+
                                            `<input type="button" class="btn btn-danger" id="acionamento" value="Desabilitar">`+
                                        '</form>'+
                                    '</li>'
                )
                /*
                let botao = document.querySelector('#acionamento')
                botao.classList.replace('btn-success', 'btn-danger')
                botao.value = "Desabilitar"
                $("#a1").val("off")*/
            }

        });






    } else {
        sessionStorage.setItem("box3main", resposta["msg"])
    }
}

$(document).ready(function(){
    listarClientes()
})

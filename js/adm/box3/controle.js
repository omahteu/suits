$(document).on("click", "#acionamento", function() {
    let base = $(this)
    let status = base.text()
    let id = base.attr("name")
    let data = `id=${id}`
    let dados = $("#formon")
    
   console.log('dados')
    /*
    if (status == "Habilitar"){
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: 'POST',
            dataType: 'json',
            url: "http://localhost/suites/php/on.php",
            async: true,
            data: "status="+status+"&id="+id,
            error: function (textStatus, errorThrown) {
                console.log("altera.js", `[LOGS] | ${textStatus} - ${errorThrown}`)
                console.log(textStatus, errorThrown)
            }
        });
    }*/
    
})

$(document).on("click", ".card", function () {
    let base = $(this)
    var bax = base[0].children[0]
    
    
    const formOn = document.getElementById(bax.id)
    
    formOn.addEventListener("click", async (e) => {
        e.preventDefault()

        const dadosForm = new FormData(formOn)
        dadosForm.append("add", 1)
        
        const dados = await fetch("http://localhost/suites/php/on.php", {
            method: "POST",
            body: dadosForm
        })
    })
})

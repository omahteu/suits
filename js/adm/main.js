$(document).on("click", "#nu_adicionar", function () {
    var dados = $('#formUsuario').serialize();/*
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "http://localhost/suites/php/usuario.php",
        async: true,
        data: dados,
    });
    alert("Cliente cadastrado com sucesso!")
    document.getElementById("formUsuario").reset()*/
    return false;
})

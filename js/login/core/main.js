import logar from "../assets/login.js"
import verifica_login_existente from "../assets/validacao_login.js"

var commands = {
    1: "#login"
}

$(document).on("submit", commands[1], function (e) {
    e.preventDefault()
    let form = $(this).serialize()
    logar(form)
})

$(window).on("load", function () {
    verifica_login_existente()
})

import {url} from "../../urlbase.js"

function autenticacao(dados){
    dados.forEach(e => {
        if(e.tipoUsuario === 'admin'){
            localStorage.setItem('usuarioLogado', 'admin')
            localStorage.setItem('nome', e.usuarioUsuario)
            localStorage.setItem('caixa', 'aberto')
            localStorage.setItem("prod", "sim")
            $(location).attr('href', './html/home.html')
        } else {
            localStorage.setItem('usuarioLogado', 'caixa')
            localStorage.setItem('nome', e.usuarioUsuario)
            localStorage.setItem('caixa', 'fechado')
            $(location).attr('href', './html/caixa.html')
        }
    });
}


$(document).on("click", "#acessar", function(e) {
    e.preventDefault()
    clientes($("#usuario").val(), $("#senha").val())
})


'./php/login/login.php'

async function clientes(usuario, senha) {
    const rq = await fetch(`${url}suits/php/login/lerusuario.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        let val_pri = rs["dados"].filter(x => x.usuario == usuario && x.senha == senha)
        if (val_pri.length > 0) {
            if (val_pri[0]["tipo"] == "on") {
                autenticacao(val_pri)
            } else {
                alert("#03: Acesso Bloqueado. \nEntre em contato com a Fortal Connect.")
            }
        } else {
            usuarios(usuario, senha)
        }
    }
}

async function usuarios(usuario, senha) {
    try {
        const rq = await fetch(`${url}suits/php/login/login.php`)
        const rs = await rq.json()
        if (rs["status"]) {
            let val_sec = rs["dados"].filter(x => x.usuarioUsuario == usuario && x.senhaUsuario == senha)
            if (val_sec.length > 0) {
                jsoon(val_sec)
            } else {
                alert("#02: Login/Senha Inválidos")
            }
        }
    } catch (error) {
        alert("#01: Login/Senha Inválidos.")
    }
}

async function jsoon(dados) {
    const rq = await fetch("./data.json")
    const rs = await rq.json()
    if (rs["tipo"] == "on") {
        autenticacao(dados)
    } else {
        alert("#04: Acesso Bloqueado. \nEntre em contato com a Fortal Connect.")
    }
}

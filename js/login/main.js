$(document).on("click", "#btn-acessar", () => {
    let usuario = $("#usuario").val()
    let senha = $("#senha").val()
    login(usuario, senha)
})

async function login(usuario, senha) {
    const rq = await fetch('http://127.0.0.1:8000/php/login.php')
    const rs = await rq.json()
    const base = rs["dados"]
    try {
        const filtro = base.filter(e => e.usuario == usuario && e.senha == senha)
        if (filtro[0].status == "on") {
            alert("Login Com Suceesso")
            window.location.href = "http://127.0.0.1:8000/html/home.html";
        } else {
            alert("Entre em contato com o Suporte da RT")
        }
    } catch (error) {
        alert("Login/Senha Incorretos!")
    }
}

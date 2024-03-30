// export default function verifica_login_existente() {
//     var usuarioLogado = localStorage.getItem('usuarioLogado')
//     var caixa = localStorage.getItem('caixa')
//     if (usuarioLogado && caixa == 'aberto') {
//         window.location = "./html/home.html"
//     }
// }

// Função para fazer uma requisição AJAX
export default function getSessionData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./php/login/session.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var sessionData = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}

import credenciando from "./credenciais.js"
import make_url from "../../tools/urls.js"

export default function getSessionData() {
    const url = make_url("login", "session.php")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var sessionData = JSON.parse(xhr.responseText);
            if (sessionData.length != 0) {
                credenciando(sessionData.tipoUsuario, sessionData.usuario, false)
            }
        }
    };
    xhr.send();
}

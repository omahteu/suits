import make_url from "../../tools/urls.js"
import fazerRequisicaoAjax from '../../tools/ajax.js'
import credenciando from "./credenciais.js"

export default function logar(form) {
    var url_one = make_url('login', 'login_interno.php')
    var url_two = make_url('login', 'validacao.php')
    var url_thr = make_url('login', 'login_externo.php')
    fazerRequisicaoAjax(url_one, "POST", form, function (replyIn) {
        var callIn = JSON.parse(replyIn)
        if (callIn['token']) {
            var pinIn = 'token=' + callIn['token']
            fazerRequisicaoAjax(url_two, "POST", pinIn, function (replyVlIn) {
                let callVlIn = JSON.parse(replyVlIn)
                callVlIn['estado'] == '1' ? credenciando(callIn.tipoUsuario, callIn.usuarioUsuario) : alert("Acesso Bloqueado!")
            }, function (erro) {
                console.error("Erro:", erro);
            })
        } else {
            fazerRequisicaoAjax(url_thr, "POST", form, function (replyEx) {
                var callEx = JSON.parse(replyEx)
                if (callEx['token']) {
                    var PinEx = 'token=' + callEx['token']
                    fazerRequisicaoAjax(url_two, "POST", PinEx, function (replyVlEx) {
                        let callVlEx = JSON.parse(replyVlEx)
                        callVlEx['estado'] == '1' ? credenciando('admin', callEx.usuario) : alert('Acesso Bloqueado')
                    }, function (erro) {
                        console.error("Erro:", erro);
                    })
                } else {
                    alert('Acesso Bloqueado')
                }
            }, function (erro) {
                console.error("Erro:", erro);
            })
        }
    }, function (erro) {
        console.error("Erro:", erro);
    });
}

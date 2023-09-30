import { RAIZ } from "../raiz.js"
export default async function desligar_luz(suite) {
    const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/automacoes.php`)
    const rs = await rq.json()
    if (rs["status"]) {
        var dados = rs["dados"].filter(e => e.suite == suite)
        console.log(dados)
        var url = `http://${dados[0].placa}/?${dados[0].rele}d*`
        $.ajax({ url: url});
    }
}

import make_url from "../../tools/urls.js"
import fazerRequisicaoAjax from "../../tools/ajax.js"

export default function alterarValor(suitex, valorx) {
    const url_get = make_url()
    const url_post = make_url()


    fazerRequisicaoAjax(url_get, "GET", null, function(response) {
        const data = JSON.parse(response)

        if (data.status) {
            
            try {
                
            } catch (error) {
                console.log(error)
            }

        }

    }, function(error) {
        console.log(error)
    })


    let filtroSuite = rs["dados"].filter((i) => i.suite == suitex);
    let tipo = filtroSuite[0].tipo;
    let condicaoDois = tipo == "locado";
    if (condicaoDois) {
        $.ajax({
            url: `http://${RAIZ}/suits/php/suites/editarcofrep.php`,
            type: "POST",
            dataType: "json",
            data: {
                antigo: suitex,
                novo: valorx,
            },
            success: (data) => {
                console.log(data);
            },
        });
    }
}

import { RAIZ } from "../../raiz.js";

export async function alterarValor(suitex, valorx) {
    const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`);
    const rs = await rq.json();
    if (rs["dados"]) {
        try {
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
        } catch (error) {
            sessionStorage.setItem("alterar.js", `[LOGS] | ${error}`);
        }
    } else {
        console.log("aaaaaaaaaaaaaaaaaaaaa");
    }
}

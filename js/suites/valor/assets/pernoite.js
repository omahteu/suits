import receber from "../../../quartos/auxiliares/funcao4.js";
import make_url from "../../../tools/urls.js";
import fazerRequisicaoAjax from "../../../tools/ajax.js";
import ativar from "./start.js";

export default function startPernoite(index) {
    const suitesData = receber("dados_suites");
    const precosData = receber("tabela_precos");
    const offsData = receber("offs");

    const url = make_url("configuracoes/show", "pernoite.php");

    fazerRequisicaoAjax(url, "GET", null, function(response) {
        try {
            const data = JSON.parse(response);



            if (data.status) {
                data.dados.forEach((pernoiteConfig) => {
                
                    let tipo = pernoiteConfig.tipoPernoite;
                    let isAutomatica = tipo === "1";
                    let isFixa = tipo === "2";

                    if (isAutomatica) {
                        let suitePostu = offsData.filter(mu => mu.suite == index);
                        

                        if (suitePostu[0].tipo === "locado") {
                            let ficha = suitesData.filter((suite) => suite.numeroSuite == index);
                            let codigo = ficha[0].codigoSuite;
                            let fich2 = precosData.filter((item) => item.codigo == codigo);
                         
                            ativar(index, fich2[0].pernoite);
                        }
                    } else if (isFixa) {
                        offsData.forEach((off) => {
                            let ficha = suitesData.filter((suite) => suite.numeroSuite == off.suite);
                            if (off.tipo !== "pernoite") {
                                let codigo = ficha[0].codigoSuite;
                                let fich2 = precosData.filter((item) => item.codigo == codigo);
                                ativar(off.suite, fich2[0].pernoite);
                            }
                        });
                    }
                });
            } else {
                console.log("Erro na leitura da Pernoite.");
            }
        } catch (error) {
            console.log(error);
        }
    }, function(error) {
        console.log(error);
    });
}

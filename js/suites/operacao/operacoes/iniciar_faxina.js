import ligar_luz from "../../../automacao/ligar.js";
import envia_dados_manutencao from "../../../caixa/manutencao.js";
import { data_atual } from "../../../geradores/data.js";
import { hora_atual } from "../../../geradores/hora.js";
import { fimMenu } from "../../../setup/menu.js";
import atualiza_status_e_reinicia from "../../../setup/atualiza2.js";
import { play } from "../../../setup/start_relogios.js";
import { stop } from "../../../setup/stop_relogios.js";
import { clean } from "../../../setup/clean_relogios.js";
import faxina from "../../../tags/faxina.js";
import receber from "../../../quartos/auxiliares/funcao4.js";
import salvar from "../../../olivia/salva.js";
import { RAIZ } from "../../../raiz.js";

export default function comecar_faxina(suite, usuario, tempo) {
    let base = receber("offs");
    let tipo = base.filter((t) => t.suite == suite);

    if (confirm(`Iniciar faxina na Suíte ${suite}?`)) {
        if (tipo[0].tipo == "manutencao") {
            var razao = localStorage.getItem("motivo");
            localStorage.removeItem(`manu${suite}`)
            envia_dados_manutencao(
                usuario,
                data_atual(),
                hora_atual(),
                suite,
                razao,
                tempo
            );
            stop[suite]();
            clean[suite](suite);
            play[suite](suite, "0", "0", "0");
            setTimeout(() => {
                ligar_luz(suite);
                let vai = "suite=" + suite + "&situacao=" + "on";
                salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai);
            }, 100);
            setTimeout(() => {
                atualiza_status_e_reinicia(suite, "faxina"), 100;
            });
            setTimeout(() => {
                faxina(suite);
            }, 200);
            setTimeout(() => {
                fimMenu();
            }, 300);
        } else {
            stop[suite]();
            clean[suite](suite);
            play[suite](suite, "0", "0", "0");
            setTimeout(() => {
                ligar_luz(suite);
                let vai = "suite=" + suite + "&situacao=" + "on";
                salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai);
            }, 100);
            setTimeout(() => {
                atualiza_status_e_reinicia(suite, "faxina"), 100;
            });
            setTimeout(() => {
                faxina(suite);
            }, 200);
            setTimeout(() => {
                fimMenu();
            }, 300);
        }
    }
}

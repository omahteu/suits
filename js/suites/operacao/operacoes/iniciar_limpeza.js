import { fimMenu } from "../../../setup/menu.js";
import registraLimiteLimpeza from "../../tarefas/registros/limpeza.js";
import ligar_luz from "../../../automacao/ligar.js";
import atualiza_status_e_reinicia from "../../../setup/atualiza2.js";
import { play } from "../../../setup/start_relogios.js";
import { clean } from "../../../setup/clean_relogios.js";
import limpeza from "../../../tags/limpeza.js";
import salvar from "../../../olivia/salva.js";
import { RAIZ } from "../../../raiz.js";

export default function comecar_limpeza(suite) {
    if (confirm(`Iniciar limpeza na Suíte ${suite}?`)) {
        localStorage.removeItem(`troca${suite}`);

        clean[suite](suite);
        play[suite](suite, "0", "0", "0");

        setTimeout(() => {
            registraLimiteLimpeza(suite, "b", "limpeza");
        }, 100);

        setTimeout(() => {
            ligar_luz(suite);
            let vai = "suite=" + suite + "&situacao=" + "on";
            salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai);
        }, 100);

        setTimeout(() => {
            limpeza(suite);
        }, 300);

        setTimeout(() => {
            atualiza_status_e_reinicia(suite, "limpeza"), 400;
        });

        setTimeout(() => {
            fimMenu();
        }, 500);
    }
}

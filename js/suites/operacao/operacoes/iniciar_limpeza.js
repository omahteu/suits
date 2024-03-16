import { fimMenu } from "../../../setup/menu.js";
import ligar_luz from "../../../automacao/ligar.js";
import atualiza_status_e_reinicia from "../../../setup/atualiza2.js";
// import { play } from "../../../setup/start_relogios.js";
// import { clean } from "../../../setup/clean_relogios.js";
import limpeza from "../../../tags/limpeza.js";
import salvar from "../../../olivia/salva.js";
import { RAIZ } from "../../../raiz.js";
import { limited } from "../../../suites/tarefas/registros/limites.js"
import {index} from "../../../tags/particao.js"
import { inicia, zera } from "../../../contadores/relogio.js";

export default function comecandoLimpeza(suite) {
    if (confirm(`Iniciar limpeza na Suíte ${suite}?`)) {
        localStorage.removeItem(`troca${suite}`);
        setTimeout(() => { limpeza(suite); }, 1);

        setTimeout(() => {
            ligar_luz(suite);
            let vai = "suite=" + suite + "&situacao=" + "on";
            salvar(`http://${RAIZ}/suits/php/suites/sacoes.php`, vai);
        }, 100);
        setTimeout(() => { limited(`http://${RAIZ}/suits/php/suites/limitemanutencao.php`, `limpezaTempo`, suite, "l", "limpeza") }, 200)
        setTimeout(() => { index(suite, "limpeza") }, 300)
        setTimeout(() => { fimMenu(); }, 500);

        setTimeout(() => { limpeza(suite); }, 300);

        setTimeout(() => { atualiza_status_e_reinicia(suite, "limpeza"), 400; });

        setTimeout(() => {
            // clean[suite](suite);
            zera(suite)
            // play[suite](suite, "0", "0", "0")
            inicia(suite, "0", "0", "0")
        }, 600);
    }
}

import buscalocacoes from "../suites/dashboard/assets/buscarLocacoes.js";
import buscasuites from "../suites/dashboard/assets/buscarSuites.js";
import buscatarefas from "../suites/dashboard/assets/buscaTarefas.js";


function handleClick(event) {
    buscalocacoes()
    buscasuites()
    buscatarefas()
}

document.addEventListener('click', handleClick);

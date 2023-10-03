import alterar from "../olivia/altera.js";
import { RAIZ } from "../raiz.js";

$(document).on("click", "#cancel", function () {
    var suite = localStorage.getItem("last");
    var dados = "suite=" + suite + "&tipo=" + "locado";
    alterar(`http://${RAIZ}/suits/php/suites/editarinfosq.php`, dados);
    setTimeout(() => {
        window.close();
    }, 1000);
});

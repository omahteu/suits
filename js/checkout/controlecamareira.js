import { RAIZ } from "../raiz.js";

$(document).ready(function () {
    nomes_camareiras();
});

async function nomes_camareiras() {
    const rq = await fetch(
        `http://${RAIZ}/suits/php/relatorios/camareiras.php`
    );
    const rs = await rq.json();
    if (rs["status"]) {
        rs["dados"].forEach((i) => {
            $("#selecionaCamareira").append(`<option>${i.nome}</option>`);
        });
    }
}

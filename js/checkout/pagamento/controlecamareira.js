import { RAIZ } from "../../raiz.js";


export default async function nomes_camareiras() {
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

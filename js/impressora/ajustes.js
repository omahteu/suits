import { RAIZ } from "../raiz.js"

$(document).on('click', '#aba_emuso', function () {
    impressoras()
})

async function impressoras() {
    const rqs = await fetch(`http://${RAIZ}/suits/php/impressoras/show/emuso.php`)
    const rst = await rqs.json()
    if (rst['status']) {
        if (rst['dados'][0].parcial != '') {
            $("#impressoras_existentes").val(rst['dados'][0].parcial)
        }
    }
}

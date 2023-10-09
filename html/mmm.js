import { RAIZ } from "../js/raiz.js"

var marcas = {
    e: 'Elgin',
    b: 'Bematech',
    t: 'Tanca',
    g: 'Goldentec',
    d: 'Daruma'
}

$(document).on('click', '#aba_emuso', function () {
    impressoras()
})

async function impressoras() {


    const rqs = await fetch(`http://${RAIZ}/suits/php/impressoras/show/emuso.php`)
    const rst = await rqs.json()
    if (rst['status']) {

        if (rst['dados'][0].emuso == '') {
            console.log('a')
        } else {
            
            $("#impressoras_existentes").val(rst['dados'][0].emuso)
        }
    }


    // const rq = await fetch(`http://${RAIZ}/suits/php/configuracoes/show/impressora.php`)
    // const rs = await rq.json()
    // if (rs['status']) {
    //     document.getElementById('impressoras_existentes').innerHTML = ''
    //     rs['dados'].forEach(e => {
    //         $("#impressoras_existentes").append(`<option>${marcas[e.marca]}</option>`)
    //     });
    // }
}
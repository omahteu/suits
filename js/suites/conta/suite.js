import receber from "../../quartos/auxiliares/funcao4.js"

$(document).on('click', '[class="card"]', function () {
	let r1 = $(this)
	let r2 = $(r1[0].children[0])
	let r3 = $(r2[0].children[1])
	let suite = r3.text()
    let base = receber("offs")
    let ficha = base.filter(i => i.suite == suite)
    try {
        if (ficha.length != 0) {
            $("#vq_painel").text(parseFloat(ficha[0].valor).toFixed(2))
        } else {
            $("#vq_painel").text(parseFloat('0.00'))
        }
    } catch (error) {
        sessionStorage.setItem('_quarto.js', `[LOGS] | ${error}`)
    }
})

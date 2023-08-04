import link from "../../setup/index.js"

$(document).on('click', '[class="card"]', function () {
	let r1 = $(this)
	let r2 = $(r1[0].children[0])
	let r3 = $(r2[0].children[1])
	let suite = r3.text()
    setTimeout(() => {
        let consumo = parseFloat($("#consumo_painel").text())
        $.get(link[36], l => {
            let filtroValores = l.filter(x => x.suite == suite)
            let sum = 0
            filtroValores.forEach(f => {
                sum += parseFloat(f.valor)
            });
            let total = sum + consumo
            $("#parcial_painel").text(total.toFixed(2))
        })
    }, 1000);
})

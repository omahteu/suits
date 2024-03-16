// import {RAIZ} from "../../raiz.js"



// export default async function calculoParcial(suite, consumo) {
//     const rq = await fetch(`http://${RAIZ}/suits/php/suites/show/cofre.php`)
//     const rs = await rq.json()
//     if (rs["status"]) {
//         let filtroValores = rs["dados"].filter(x => x.suite == suite)
//         let sum = 0
//         filtroValores.forEach(f => {
//             sum += parseFloat(f.valor)
//         });
//         let total = sum + consumo
//         $("#parcial_painel").text(total.toFixed(2))
//     }
// }

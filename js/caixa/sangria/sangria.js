// import { data_atual } from "../../geradores/data.js"
// import { hora_atual_segundos } from "../../geradores/hora.js"
// import { inicioMenu } from "../../setup/menu.js"
// import {RAIZ} from "../../raiz.js"


// export async function sangria() {
//     const rq = await fetch(`http://${RAIZ}/suits/php/caixa/show/teto.php`)
//     const rs = await rq.json()
//     if (rs["status"]) {
//         setTimeout(() => {
//             let nome = localStorage.getItem("nome")
//             let saldo = $("#saldo_caixa").text()
//             let usuario = localStorage.getItem("usuarioLogado")
//             if (usuario != "caixa") {
//                 if (parseFloat(saldo) > parseFloat(rs["dados"][0].tetoCaixa)) {
//                     alert("Realizar Sangria!")
//                     inicioMenu("modau-menu")
//                     let fm = document.forms[0]
//                     fm.id = "formSangria"
//                     fm.action = "../php/caixa/sangria.php"
//                     $(fm).append(
//                         `
//                             <input type="text" name="data_atual" value="${data_atual()}" readonly>
//                             <input type="text" name="hora_atual" value="${hora_atual_segundos()}" readonly>
//                             <input type="text" name="nome_usuario" value="${nome}" readonly>
//                             <input type="text" name="saldo_atual" value="${saldo}" readonly>
//                             <input type="text" name="valor_sangrado" id="valor_sangrado" placeholder="Valor Sangrado" required>
//                             <button type="submit" class="btn btn-primary">Retirar</button>
//                         `
//                     )
//                 }
//             }
//         }, 1000)
//     }
// }

// $(document).on("click", "#aba_saldo", async function() {
//     const rq = await fetch(`http://${RAIZ}/suits/php/caixa/show/teto.php`)
//     const rs = await rq.json()
//     if (rs["status"]) {
//         setTimeout(() => {
//             let nome = localStorage.getItem("nome")
//             let saldo = $("#saldo_caixa").text()
//             let usuario = localStorage.getItem("usuarioLogado")
//             if (usuario == "caixa") {
//                 if (parseFloat(saldo) > parseFloat(rs["dados"][0].tetoCaixa)) {
//                     alert("Realizar Sangria!")
//                     inicioMenu("modau-menu")
//                     let fm = document.forms[0]
//                     fm.id = "formSangria"
//                     fm.action = "../php/caixa/sangria.php"
//                     $(fm).html('')
//                     $(fm).append(
//                         `
//                             <input type="text" name="data_atual" value="${data_atual()}" readonly>
//                             <input type="text" name="hora_atual" value="${hora_atual_segundos()}" readonly>
//                             <input type="text" name="nome_usuario" value="${nome}" readonly>
//                             <input type="text" name="saldo_atual" value="${saldo}" readonly>
//                             <input type="text" name="valor_sangrado" id="valor_sangrado" placeholder="Valor Sangrado" required>
//                             <button type="submit" class="btn btn-primary">Retirar</button>
//                         `
//                     )
//                 }
//             }
//         }, 1000)
//     }
// })

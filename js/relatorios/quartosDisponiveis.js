import receber from "../quartos/auxiliares/funcao4.js";


export default function Suitesdisponiveis() {
    let offs = receber("offs")
    let suite = receber("dados_suites")
    let suites = []
    offs.forEach(o => {
        suites.push(o.suite)
    });
    $("#quartos_disponiveis").empty()
    suite.forEach(il => {
        if (suites.includes(il.numeroSuite) == false) {
            console.log(il)
            $("#quartos_disponiveis").append(`<option>${il.numeroSuite}</option>`)
        }
    });
}

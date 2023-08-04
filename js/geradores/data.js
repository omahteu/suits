import { numero } from "../geradores/numero.js"

export function data_atual(){
    let base = new Date();
    let dia = numero(base.getDate())
    let mes = numero(base.getMonth() + 1)
    let ano = numero(base.getFullYear())
    return `${String(dia)}/${String(mes)}/${String(ano)}`
}

export function dateToEN(date) {
    return date.split('/').reverse().join('-');
}

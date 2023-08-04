import { numero } from "../geradores/numero.js"

export function hora_atual(){
    let base = new Date();
    let hora = numero(base.getHours())
    let minuto = numero(base.getMinutes())
    return `${hora}:${minuto}`
}

export function hora_atual_segundos(){
    let base = new Date();
    let hora = numero(base.getHours())
    let minuto = numero(base.getMinutes())
    let segundo = numero(base.getSeconds())
    return `${hora}:${minuto}:${segundo}`
}

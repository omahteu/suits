import { numero } from "./numero.js"

export default function formatarData(data) {
    const hora = numero(data.getHours())
    const minuto = numero(data.getMinutes())
    return `${hora}:${minuto}`
}

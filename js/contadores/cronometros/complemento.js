export default function formata(input) {
    if (input >= 10) {
        return input
    } else if (input >= 1 && input <= 9) {
        return `0${input}`
    } else if (input == 0 || String(input) == "00") {
        return `0${input}`
    } else {
        return `${Math.abs(input)}`
    }
}

export default function receber(tab) {
    var dads = JSON.parse(sessionStorage.getItem(tab))
    return dads
}

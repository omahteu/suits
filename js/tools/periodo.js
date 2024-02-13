var commands = {
    1: "#periodo"
}

var responses = {
    1: "Bom dia",
    2: "Boa tarde",
    3: "Boa noite"
}

$(document).ready(function () {
    var base = new Date()
    var hora = base.getHours()
    if (hora >= 0 && hora < 12) {
        $(commands[1]).text(responses[1])
    } else if (hora >= 12 && hora <= 18) {
        $(commands[1]).text(responses[2])
    } else {
        $(commands[1]).text(responses[3])
    }
})

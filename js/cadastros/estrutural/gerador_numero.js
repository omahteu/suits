function geraid(id, sequencia = 3) {
    var size = parseInt(sequencia)
    var randomized = Math.ceil(Math.random() * Math.pow(10, size))
    $(`#${id}`).val(randomized)
}

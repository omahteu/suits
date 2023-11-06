$(window).on("load", function() {
    let numero = localStorage.getItem("last")
    $("#suiteEncerrando").text(`| Suíte ${numero}`)
})

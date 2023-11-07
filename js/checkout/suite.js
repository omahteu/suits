$(window).on("load", function() {
    let numero = localStorage.getItem("last")
    $("#suiteEncerrando").text(`${numero}`)
})

setTimeout(() => {
    $(document).on("mousemove", "#content", function() {
        let num2 = $("#suiteEncerrando").text()
        localStorage.setItem('last', num2)
    })
}, 1000);

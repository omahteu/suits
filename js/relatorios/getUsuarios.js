import link from "../setup/index.js"

$(document).ready(function() {
    $.get(link[20], (e) => {
        e.forEach( (i) => {
            $('#selectUsuarios').append(`<option>${i.item}</option>`);
        });
    })
})

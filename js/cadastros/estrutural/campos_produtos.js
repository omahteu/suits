import { data_atual } from "../../geradores/data.js"

$(document).on("focus", "#codigo", function() {
    $("#data").val(data_atual())
})

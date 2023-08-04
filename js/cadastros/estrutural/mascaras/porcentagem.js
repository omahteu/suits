let options = {
    onKeyPress: function (val, e, field, options) {
        let masks = ['00%', '000%'];
        let container = $('#txtPorcentagem');
        mask = (val.length > 2) ? masks[1] : masks[0];
        if (parseInt(val) > 100)
            container.val('100');
        container.mask(mask, options);
    }
};

$('#taxa').mask('00%', options);

export default function expandir (dataAgora) {
    var nome = localStorage.getItem("logado")
    var fm = document.forms.namedItem("formCadastroProdutos")
    //var quantidade_base = $("#m3").text()
    fm.action = "../php/estoque/movimentacoes.php"
    $("#xxx").append(

        `
        <div class="control-group" hidden>
            <div class="controls">
                <input type="text" name="dataAgora" id="dataAgora" value="${dataAgora}">
            </div>
        </div>

        <div class="control-group" hidden>
            <div class="controls">
                <input type="text" name="nome" id="nome" value="${nome}">
            </div>
        </div>

        <div class="control-group" hidden>
            <div class="controls">
                <input type="text" name="quantidade_base" id="quantidade_base" value="">
            </div>
        </div>
        `+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<input type="text" name="descricaoProduto" id="descricaoProduto" value="">`+
            `</div>`+
        `</div>`+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<input type="text" name="valorUnitarioProduto" id="valorUnitarioProduto" value="" readonly>`+
            `</div>`+
        `</div>`+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<input type="text" name="categoriaProduto" id="categoriaProduto" value="" readonly>`+
            `</div>`+
        `</div>`+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<select name="acao_movimentacao" id="acao_movimentacao">`+
                    `<option value="" hidden>Ação</option>`+
                    `<option value="entrada">Entrada</option>`+
                    `<option value="saida">Saída</option>`+
                `</select>`+
            `</div>`+
        `</div>`+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<input type="text" name="quantidadeProduto" id="quantidadeProduto" placeholder="Quantidade">`+
            `</div>`+
        `</div>`+

        `
        <div class="form-actions">
            <div class="span8">
            <div class="span9">
                <button type="submit" class="button btn btn-primary">
                <span class="button__icon">
                    <i class="fa-solid fa-floppy-disk"></i>
                </span>
                <span class="button__text2">Buscar</span>
                </button>
            </div>
            </div>
        </div>
        `
    )

    setTimeout(() => {
        
    }, 150);
}

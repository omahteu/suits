import receber from "../../../auxiliares/funcao4.js";

export default function exibe_suites() {
    const base = receber("dados_suites");
    const cardBox = $(".cardBox");

    base.forEach(suite => {
        const { numeroSuite: indice, nomeSuite: nome } = suite;

        const cardHtml = `
            <li class="card">
                <div>
                    <h3 id="contador">
                        <span id="hora${indice}">00</span>:<span id="minuto${indice}">00</span>:<span id="segundo${indice}">00</span>
                    </h3>
                    <div class="cardName" id="suite">${indice}</div>
                    <h4 id="tipo_suite${indice}">${nome}</h4>
                </div>
                <a id="context">
                    <div class="iconBx">
                        <i class="fa fa-gear"></i>
                    </div>
                </a>
            </li>
        `;

        cardBox.append(cardHtml);
    });
}

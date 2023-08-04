import { dadosOcupacao } from "./dados.js";
import { loc } from "./dados.js"

$(document).ready(function () {
    dadosOcupacao()
})

let cores = {
    'locado': 'rgba(255, 99, 132, 0.2)',
    'aguardando': 'rgba(255, 159, 64, 0.2)',
    'manutencao': 'rgba(255, 205, 86, 0.2)',
    'faxina': 'rgba(75, 192, 192, 0.2)',
    'limpeza': 'rgba(54, 162, 235, 0.2)',
    'pernoite': 'rgba(153, 102, 255, 0.2)'
}

function contarOcorrencias(palavras) {
    let ocorrencias = {};

    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i]

        if (ocorrencias[palavra]) {
            ocorrencias[palavra]++
        } else {
            ocorrencias[palavra] = 1
        }
    }

    return ocorrencias;
}

setTimeout(() => {
    const ctx = document.getElementById('myChart')
    let resultado = contarOcorrencias(loc);
    let valores = Object.values(resultado);
    let chaves = Object.keys(resultado);

    let objetoFiltrado = Object.keys(cores)
        .reduce((resultadot, chave) => {
            if (chaves.includes(chave)) {
                resultadot[chave] = cores[chave];
            }
            return resultadot;
        }, {});

    let cor = Object.values(objetoFiltrado)

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chaves,
            datasets: [{
                data: valores,
                backgroundColor: cor,
                borderColor: cor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}, 500);

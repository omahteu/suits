const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out','Nov','Dez'];

function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }

    return values;
}



const labels = months({ count: 7 });




const ctx2 = document.getElementById('myChart2');
var re = [1.500, 12.145, 3.000, 5.000, 2.251, 3.651]



setTimeout(() => {


    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Faturamento",
                data: re,
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
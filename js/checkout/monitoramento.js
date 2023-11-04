setInterval(() => {
    let tarefasAtivas = JSON.parse(sessionStorage.getItem('tarefas'))
    let suite = localStorage.getItem('last')
    let buscaSuite = tarefasAtivas.filter(x => x.suite === suite && x.modo === "dt");


    if (buscaSuite.length != 0) {
        $("#aba_desistencia").hide();
    }

}, 1000);

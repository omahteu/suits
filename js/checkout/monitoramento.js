setInterval(() => {
    let tarefasAtivas = JSON.parse(sessionStorage.getItem('tarefas'))
    let suite = localStorage.getItem('last')
    let buscaSuite = tarefasAtivas.filter(x => x.suite === suite && x.modo === "dt");


    console.log(buscaSuite)

}, 1000);

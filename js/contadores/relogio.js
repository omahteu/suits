import formata from "./complemento.js";

"use strict";

let suites = {}

export function inicia(id, h, m, s) {
    suites[id] = {
        hora: parseInt(h),
        minuto: parseInt(m),
        segundo: parseInt(s),
        msegundo: 0,
        contagem: null
    };
    para(id);
    suites[id].contagem = setInterval(() => { corre(id); }, 10);
}

export function para(id) {
    clearInterval(suites[id].contagem);
}

export function zera(id) {
    suites[id].hora = 0;
    suites[id].minuto = 0;
    suites[id].segundo = 0;
    suites[id].msegundo = 0;
    document.getElementById(`hora${id}`).innerText = '00';
    document.getElementById(`minuto${id}`).innerText = '00';
    document.getElementById(`segundo${id}`).innerText = '00';
}

function corre(id) {
    if ((suites[id].msegundo += 10) == 1000) {
        suites[id].msegundo = 0;
        suites[id].segundo++;
    }
    if (suites[id].segundo == 60) {
        suites[id].segundo = 0;
        suites[id].minuto++;
    }
    if (suites[id].minuto == 60) {
        suites[id].minuto = 0;
        suites[id].hora++;
    }
    document.getElementById(`hora${id}`).innerText = formata(suites[id].hora);
    document.getElementById(`minuto${id}`).innerText = formata(suites[id].minuto);
    document.getElementById(`segundo${id}`).innerText = formata(suites[id].segundo);
}

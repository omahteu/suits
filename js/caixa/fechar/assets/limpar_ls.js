export default function limparLocalStorage() {
    const localStorageItens = [
        'usuarioLogado', 'ficha', 'caixa', 'nome', 'permanencia', 'va', 'vst', 
        'fundo', 'vs', 'vc'
    ];

    localStorageItens.forEach(item => localStorage.removeItem(item));
}

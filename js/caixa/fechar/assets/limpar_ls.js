export default function limparLocalStorage() {
    const localStorageItens = [
        'usuarioLogado', 'ficha', 'caixa', 'nome', 'permanencia', 'va', 'vst', 
        'fundo', 'vs', 'vc', 'dinheiro', 'pix', 'prod', 'credito', 'debito'
    ];

    localStorageItens.forEach(item => localStorage.removeItem(item));
}

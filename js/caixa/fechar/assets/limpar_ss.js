export default function limparSessionStorage() {
    const sessionStorageItens = [
        'offs', 'tabela_precos', 'dados_suites', 'prod'
    ];

    sessionStorageItens.forEach(item => sessionStorage.removeItem(item));
}

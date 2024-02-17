export default function limparSessionStorage() {
    const sessionStorageItens = [
        'offs', 'tabela_precos', 'dados_suites', 'total_caixa'
    ];

    sessionStorageItens.forEach(item => sessionStorage.removeItem(item));
}

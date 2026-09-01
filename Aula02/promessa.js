function consultarProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) resolve({ id: 1, nome: 'Mouse' });
            else reject(new Error(`Produto ${id} não encontrado.`));
        }, 150);
    });
}


// Chamada por Promise
// consultarProduto(1)
//     .then((produto) => console.log('Sucesso: ', produto))
//     .catch((error) => console.log('Falha: ', error.message));


// Chamada por Async/Await
async function executar(id) {
    try {
        const produto = await consultarProduto(id);
        console.log('Sucesso: ', produto);
    } catch (error) {
        console.error('Falha: ', error.message);
        process.exitCode = 1;
    }
}

executar(1);   

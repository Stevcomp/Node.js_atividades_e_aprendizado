const componenteOriginal = Object.freeze({
  id: 17,
  nome: 'Sensor ultrassônico',
  estoque: 4,
  bancada: 'Robótica'
});

const novoEstoque = Number(process.argv[2] || '12');

function atualizarEstoque(componente, quantidade) {
  if (!Number.isSafeInteger(quantidade) || quantidade < 0) {
    throw new Error('Quantidade de estoque inválida.');
  }
  return { ...componente, estoque: quantidade };
}

try {
  const componenteAtualizado = atualizarEstoque(componenteOriginal, novoEstoque);
  console.log({ componenteOriginal, componenteAtualizado });
} catch (erro) {
  console.error(erro.message);
  process.exitCode = 1;
}